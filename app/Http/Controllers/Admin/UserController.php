<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Traits\CrudOperationsTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$this->authorize('viewAny', User::class);
		$user = Auth::user();


		$filters = Request::all('search', 'role', 'trashed');

		$query = $this->commonIndexLogic(User::class, $filters);

		if ($user->role->name === 'Admin') {
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
					'profile_photo_url' => $user->profile_photo_url,
					'deleted_at' => $user->deleted_at,
				];
			});

		return Inertia::render('Admin/Pages/Users/Index', [
			'filters' => $filters,
			'users' => $users,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		$this->authorize('create', User::class);

		return Inertia::render('Admin/Pages/Users/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store() {

		$this->authorize('create', User::class);

		Request::validate([
			'name' => ['required', 'max:50'],
			'email' => ['required', 'max:50', 'email', Rule::unique('users')],
			'password' => ['required', 'min:8'],
			'role_id' => ['required', 'int'],
		]);

		User::create([
			'name' => Request::get('name'),
			'email' => Request::get('email'),
			'password' => Request::get('password'),
			'role_id' => Request::get('role_id'),
		]);

		return Redirect::route('users.index')->with('success', 'User created.');
	}

	/**
	 * Display the specified resource.
	 */
	public function show(User $user) {


	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		$user = User::withTrashed()->find($id);
		$this->authorize('update', $user);

		return Inertia::render('Admin/Pages/Users/Edit', [
			'user' => $user,
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(User $user) {
//		$user = User::findOrFail($id);
		$this->authorize('update', $user);


		Request::validate([
			'name' => ['required', 'max:50'],
			'email' => ['required', 'max:50', 'email'],
			'password' => ['nullable',],
			'role_id' => ['required', 'int'],
		]);

		// Conditionally modify email validation rule
		if ($user->email !== request('email')) {
			// Only apply unique rule if the email being updated is different from the user's current email
			$rules['email'][] = Rule::unique('users');
		}

		$user->update(Request::only('name', 'email', 'role_id'));


		if (Request::get('password')) {
			$user->update(['password' => Request::get('password')]);
		}

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
