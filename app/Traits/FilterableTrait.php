<?php

namespace App\Traits;

use Illuminate\Support\Facades\Schema;

trait FilterableTrait
{
	public function applyFilters($query, $filters) {
		$query->when($filters['search'] ?? null, function ($query, $search) {
			$query->where(function ($query) use ($search) {
				$query->where('name', 'like', '%'.$search.'%');

				// Check if the 'email' column exists in the table
				if (Schema::hasColumn($query->getModel()->getTable(), 'email')) {
					$query->orWhere('email', 'like', '%'.$search.'%');
				}

				// Check if the relation exists
				if (method_exists($query->getModel(), 'city')) {
					$query->orWhereHas('city', function ($q) use ($search) {
						$q->where('name', 'like', '%'.$search.'%');
					});
				}

				if (method_exists($query->getModel(), 'types')) {
					$query->orWhereHas('types', function ($q) use ($search) {
						$q->where('name', 'like', '%'.$search.'%');
					});
				}

				if (method_exists($query->getModel(), 'categories')) {
					$query->orWhereHas('categories', function ($q) use ($search) {
						$q->where('name', 'like', '%'.$search.'%');
					});
				}
			});
		})->when($filters['role'] ?? null, function ($query, $role) {
			$query->where('role_id', $role);

		})->when($filters['trashed'] ?? null, function ($query, $trashed) {
			// Common trashed logic
			if ($trashed === 'with') {
				$query->withTrashed();
			} elseif ($trashed === 'only') {
				$query->onlyTrashed();
			}
		});


		return $query;
	}
}