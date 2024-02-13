<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): ?bool
    {
        if ($user->isSuperAdmin()) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        if ($model->role) {
            if ($user->role->name !== 'SuperAdmin' && $model->role->name === 'SuperAdmin') {
                return false;
            }
            if ($user->role->name !== 'SuperAdmin' && $model->role->name === 'Admin') {
                return false;
            }
        }

        return $user->isAdmin();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): bool
    {
        if ($model->role !== null && $model->role->name !== null) {
            $targetUserRole = $model->role->name;
            $authenticatedUserRole = $user->role->name;

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
    public function delete(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user): bool
    {
        return $user->isAdmin();
    }
}
