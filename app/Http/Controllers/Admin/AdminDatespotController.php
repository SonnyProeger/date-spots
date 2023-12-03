<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Datespot;
use App\Traits\CrudOperationsTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminDatespotController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */
	public function index(Request $request) {
		$this->authorize('viewAny', Datespot::class);

		$user = Auth::user();

		$filters = $request->all('search', 'trashed');


		$query = $this->commonIndexLogic(Datespot::class, $filters);

		if ($user->role_id === 3) {
			// Company can only see their own datespot
			$query->whereIn('user_id', $user->id);
		}

		$datespots = Datespot::select('datespots.id', 'datespots.name', 'datespots.city', 'datespots.deleted_at')
			->with(
				'types'
			)
			->paginate(10)
			->withQueryString()
			->through(function ($datespot) {
				$firstTypeName = optional($datespot->types->first())->name;
				return [
					'id' => $datespot->id,
					'name' => $datespot->name,
					'city' => $datespot->city,
					'type' => $firstTypeName ?? 'No Type',
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

		return Inertia::render('Admin/Pages/Datespots/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$this->authorize('create', Datespot::class);

		$validatedData = $request->validate([
			'name' => 'required|string',
			'tagline' => 'required|string',
			'email' => 'required|email',
			'phone_number' => 'required|string',
			'street_name' => 'required|string',
			'house_number' => 'required|string',
			'city' => 'required|string',
			'province' => 'required|string',
			'postal_code' => 'required|string',
			'website' => 'required|string',
			'lat' => 'required|numeric',
			'lng' => 'required|numeric',
		]);

		$validatedData['datespot_id'] = Str::uuid();

		$datespot = Datespot::create($validatedData);


		return Inertia::render('DatespotDetails', ['datespot' => $datespot]);

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
		$datespot = Datespot::withTrashed()
			->with([
				'user' => function ($query) {
					$query->withTrashed();
				}
			])
			->find($id);
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

		$validatedData = $request->validate([
			'name' => 'required|string',
			'email' => 'required|email',
			'phone_number' => 'required|string',
			'street_name' => 'required|string',
			'house_number' => 'required|string',
			'city' => 'required|string',
			'province' => 'required|string',
			'postal_code' => 'required|string',
			'website' => 'required|string',
			'lat' => 'required|numeric',
			'lng' => 'required|numeric',
		]);

		$datespot->update($validatedData);


		return Redirect::back()->with('success', 'Datespot updated.');
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
