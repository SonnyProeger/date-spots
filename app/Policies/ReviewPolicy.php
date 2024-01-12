<?php

namespace App\Policies;

use App\Models\Review;
use App\Models\User;

class ReviewPolicy
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
			$user->isAdmin();

	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user): bool {
		return
			$user->isAdmin();
	}

	/**
	 * Determine whether the user can create models.
	 */
	public function create(User $user): bool {

//		if ($alreadyReviewed !== null) {
//			return !$alreadyReviewed;
//		}

		return $user->isAdmin();

	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user): bool {
		return
			$user->isAdmin();

	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user, ?Review $review = null): bool {
		$isAdmin = $user->isAdmin();

		if ($review !== null) {
			if (
				$user->ownsReview($review)) {
				return true;
			}
		}

		return $isAdmin;
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
