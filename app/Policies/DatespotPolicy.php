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
		return
			$user->isAdmin() || $user->isCompany();
	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user, Datespot $datespot): bool {

		if ($user->isAdmin()) {
			return true;
		}

		if ($user->isCompany() && $user->ownsDatespot($datespot)) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can create models.
	 */
	public function create(User $user): bool {
		//
		return
			$user->isAdmin();
	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user, Datespot $datespot): bool {
		if (
			$user->isAdmin()) {
			return true;
		}

		if (
			$user->isCompany() && $user->ownsDatespot($datespot)) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user): bool {
		if (
			$user->isAdmin()) {
			return true;
		}

		return false;
	}

	/**
	 * Determine whether the user can restore the model.
	 */
	public function restore(User $user): bool {
		return
			$user->isAdmin();

	}

	/**
	 * Determine whether the user can permanently delete the model.
	 */
	public function forceDelete(User $user): bool {
		return
			$user->isAdmin();

	}
}
