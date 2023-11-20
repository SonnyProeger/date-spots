<?php

namespace App\Http\Controllers;

use App\Models\Datespot;
use App\Traits\CrudOperationsTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AdminDatespotController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$this->authorize('viewAny', Datespot::class);

		$user = Auth::user();

		$filters = Request::all('search', 'trashed');


		$query = $this->commonIndexLogic(Datespot::class, $filters);

		if ($user->role_id === 3) {
			// Company can only see their own datespot
			$query->whereIn('user_id', $user->id);
		}

		$datespots = $query->paginate(10)
			->withQueryString()
			->through(function ($datespot) {
				return [
					'id' => $datespot->id,
					'name' => $datespot->name,
					'city' => $datespot->city,
					'types' => $datespot->types,
					'deleted_at' => $datespot->deleted_at,
				];
			});
		return Inertia::render('Admin/Pages/Datespots/Index', [
			'filters' => $filters,
			'datespots' => $datespots,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		$this->authorize('create', Datespot::class);

		// Display create form
		return Inertia::render('Admin/Pages/Datespots/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$this->authorize('create', Datespot::class);

		// Validate request and store the new resource
		$data = $request->validate([
			// Validation rules for storing datespot
		]);

		$datespot = Datespot::save($data);

		return Inertia::render('Admin/AdminDatespotsDetail', [
			'datespot' => $datespot,
		]);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id) {
		$datespot = Datespot::query()->findOrFail($id);

		$this->authorize('view', $datespot);


		return Inertia::render('DatespotDetails', ['datespot' => $datespot]);
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		$datespot = Datespot::withTrashed()->find($id);

		$this->authorize('update', $datespot);


		return Inertia::render('Admin/Pages/Datespots/Edit', [
			'datespot' => $datespot
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id) {
		$datespot = Datespot::query()->findOrFail($id);

		$this->authorize('update', $datespot);


		// Validate request and update the specified datespot
		$data = $request->validate([
			// Validation rules for updating datespot
		]);

		$datespot->update($data);

		return redirect()->route('datespots.show', $id);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id) {
		$datespot = Datespot::query()->findOrFail($id);

		$this->authorize('delete', $datespot);


		$datespot->delete();

		return redirect()->route('datespots.index');
	}
}
