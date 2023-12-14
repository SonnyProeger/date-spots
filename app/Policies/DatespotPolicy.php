<?php

namespace App\Policies;

use App\Models\Datespot;
use App\Models\User;

class DatespotPolicy
{

	/**
	 * Perform pre-authorization checks.
	 */
	public function before(User $user, string $ability): bool|null {
		if ($user->isSuperAdmin()) {
			return true;
		}

		return null;
	}

	/**
	 * Determine whether the user can view any models.
	 */
	public function viewAny(User $user): bool {
		return $user->role->name === 'Admin' || $user->role->name === 'Company';
	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user, Datespot $datespot): bool {

		if ($user->role->name === 'Admin') {
			return true;
		}

		if ($user->role->name === 'Company' && $user->id === $datespot->company_id) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can create models.
	 */
	public function create(User $user): bool {
		//
		return $user->role->name === 'Admin';
	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user, Datespot $datespot): bool {
		if ($user->role->name === 'Admin') {
			return true;
		}

		if ($user->role->name === 'Company' && $user->id === $datespot->user_id) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user, Datespot $datespot): bool {
		if ($user->role->name === 'Admin') {
			return true;
		}

		if ($user->role->name === 'Company' && $user->id === $datespot->company_id) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can restore the model.
	 */
	public function restore(User $user, Datespot $datespot): bool {
		return $user->role->name === 'Admin';

	}

	/**
	 * Determine whether the user can permanently delete the model.
	 */
	public function forceDelete(User $user, Datespot $datespot): bool {
		return $user->role->name === 'Admin';

	}
}
