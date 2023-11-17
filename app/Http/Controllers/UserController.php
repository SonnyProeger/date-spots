<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class UserController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index() {

		$this->authorize('viewAny', User::class);

		$usersQuery = User::query()
			->orderBy('name');

		$filters = Request::all('search', 'role', 'trashed');

		if ($filters['search']) {
			$usersQuery->where('name', 'like', '%'.$filters['search'].'%');
		}

		if ($filters['role']) {
			$usersQuery->where('role_id', $filters['role']);
		}

		$users = $usersQuery->paginate(10)
			->withQueryString()
			->through(function ($user) {
				return [
					'id' => $user->id,
					'name' => $user->name,
					'email' => $user->email,
					'role_id' => $user->role->id,
					'profile_photo_url' => $user->profile_photo_url,
					'deleted_at' => $user->deleted_at,
				];
			});
		return Inertia::render('Admin/Pages/Users/Index', [
			'filters' => $filters,
			'users' => $users,

//			'users' => User::query()
//				->orderByDesc('name')
//				->when(Request::input('search'), function ($query, $search) {
//					$query->where('name', 'like', "%$search%");
//				})
//				->when(Request::input('role_id'), function ($query, $role_id) {
//					$query->where('role_id', $role_id);
//				})
//				->paginate(10)
//				->withQueryString()
//				->transform(fn($user) => [
//					'id' => $user->id,
//					'name' => $user->name,
//					'email' => $user->email,
//					'owner' => $user->owner,
//					'photo' => $user->profile_photo_url,
//					'deleted_at' => $user->deleted_at,
//				]),
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id) {
		//
	}
}
