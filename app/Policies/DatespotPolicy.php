<?php

namespace App\Policies;

use App\Models\Datespot;
use App\Models\User;

class datespotPolicy
{
	/**
	 * Determine whether the user can view any models.
	 */
	public function viewAny(User $user): bool {
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);
	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user, Datespot $datespot): bool {

		if (in_array($user->role->name, ['SuperAdmin', 'Admin'])) {
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
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);
	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user, Datespot $datespot): bool {
		if (in_array($user->role->name, ['SuperAdmin', 'Admin'])) {
			return true;
		}

		if ($user->role->name === 'Company' && $user->id === $datespot->company_id) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user, Datespot $datespot): bool {
		if (in_array($user->role->name, ['SuperAdmin', 'Admin'])) {
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
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);

	}

	/**
	 * Determine whether the user can permanently delete the model.
	 */
	public function forceDelete(User $user, Datespot $datespot): bool {
		return in_array($user->role->name, ['SuperAdmin', 'Admin']);

	}
}
