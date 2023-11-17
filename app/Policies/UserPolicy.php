<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
	/**
	 * Determine whether the user can view any models.
	 */
	public function viewAny(User $user): bool {
		//
		return $user->role->name === 'SuperAdmin';
	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user, User $model): bool {
		//
		return $user->role->name === 'SuperAdmin';

	}

	/**
	 * Determine whether the user can create models.
	 */
	public function create(User $user): bool {
		//
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);
	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user, User $model): bool {

		if ($model->role !== null && $model->role->name !== null) {
			$targetUserRole = $model->role->name;
			$authenticatedUserRole = $user->role->name;

			// SuperAdmin can update any user
			if ($authenticatedUserRole === 'SuperAdmin') {
				return true;
			}

			// Admin can manage users with the 'Company' or 'User' role
			if ($authenticatedUserRole === 'Admin' && in_array($targetUserRole, ['Company', 'User'])) {
				return true;
			}

			// Users can only update themselves
			if ($authenticatedUserRole === 'User' && $user->id === $model->id) {
				return true;
			}

			// Company can only update themselves
			if ($authenticatedUserRole === 'Company' && $user->id === $model->id) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user, User $model): bool {
		//
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);

	}

	/**
	 * Determine whether the user can restore the model.
	 */
	public function restore(User $user, User $model): bool {

		return in_array($user->role->name, ['SuperAdmin', 'Admin']);

	}

	/**
	 * Determine whether the user can permanently delete the model.
	 */
	public function forceDelete(User $user, User $model): bool {

		return in_array($user->role->name, ['SuperAdmin', 'Admin']);

	}
}
