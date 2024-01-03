<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Traits\CrudOperationsTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */
	public function index(Request $request) {
		$this->authorize('viewAny', User::class);
		$user = Auth::user();

		$filters = $request->only('search', 'role', 'trashed');


		$query = $this->commonIndexLogic(User::class, $filters);

		if ($user->isAdmin()) {
			// Admin can only view 'users' and 'companies'
			$companyRoleId = Role::where('name', 'Company')->id;
			$userRoleId = Role::where('name', 'User')->id;

			$query->whereIn('role_id', [$companyRoleId, $userRoleId]);
		}

		$users = $query->with(['role:id'])
			->paginate(10)
			->withQueryString()
			->through(function ($user) {
				return [
					'id' => $user->id,
					'name' => $user->name,
					'email' => $user->email,
					'role_id' => $user->role->id,
					'profile_photo_url' => $user->profile_photo_path,
					'deleted_at' => $user->deleted_at,
				];
			});

		return Inertia::render('Admin/Users/Index', [
			'filters' => $filters,
			'users' => $users,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		$this->authorize('create', User::class);

		return Inertia::render('Admin/Users/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$this->authorize('create', User::class);

		$validatedData = $request->validate([
			'name' => ['required', 'max:50'],
			'email' => ['required', 'max:50', 'email', Rule::unique('users')],
			'password' => ['required', 'min:8'],
			'role_id' => ['required', 'int'],
		]);

		User::create($validatedData);

		return Redirect::route('users.index')->with('success', 'User created.');
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		$user = User::withTrashed()->find($id);
		$this->authorize('update', $user);

		return Inertia::render('Admin/Users/Edit', [
			'user' => $user,
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, User $user) {
		$this->authorize('update', $user);

		$validatedData = $request->validate([
			'name' => ['required', 'max:50'],
			'email' => ['required', 'max:50', 'email'],
			'password' => ['nullable', 'min:8'],
			'role_id' => ['required', 'int'],
		]);

		//generate password
		$validatedData['password'] = bcrypt('password');

		if ($user->email !== $validatedData['email']) {
			$rules['email'][] = Rule::unique('users');
		}

		$user->update($validatedData);

		return Redirect::back()->with('success', 'User updated.');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(User $user) {
		$this->authorize('delete', $user);

		$user->delete();

		return Redirect::route('users.index')->with('success', "$user->name deleted.");
	}

	public function restore(User $user) {
		$this->authorize('restore', $user);
		$user->restore();

		return Redirect::back()->with('success', 'User restored.');
	}
}
