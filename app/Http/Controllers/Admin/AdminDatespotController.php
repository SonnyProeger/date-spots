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


		$userRoleID = $user->role_id;

		$datespots = Datespot::select('datespots.id', 'datespots.name', 'datespots.city', 'datespots.deleted_at')
			->with('types')
			->when($userRoleID === 3, function ($query) use ($user) {
				// For Company users, limit to their own datespots
				return $query->where('user_id', $user->id);
			})
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
			'datespot_id' => 'string',
			'name' => 'required|string',
			'tagline' => 'required|string',
			'email' => 'required|email',
			'phone_number' => 'required|string',
			'street_name' => 'required|string',
			'house_number' => 'required|numeric',
			'city' => 'required|string',
			'province' => 'required|string',
			'postal_code' => 'required|string',
			'website' => 'required|string',
			'lat' => 'required|numeric',
			'lng' => 'required|numeric',
		]);

		if ($validatedData['datespot_id'] === null) {
			$validatedData['datespot_id'] = Str::uuid();
		}

		Datespot::create($validatedData);

		return Redirect::route('datespots.index')->with('success', 'Datespot created.');

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
			'house_number' => 'required|numeric',
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

		return Redirect::route('datespots.index')->with('success', "$datespot->name deleted.");
	}

	public function restore(Datespot $datespot) {
		$this->authorize('restore', $datespot);
		$datespot->restore();
		return Redirect::back()->with('success', 'Datespot restored.');
	}
}
