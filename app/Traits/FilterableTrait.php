<?php

namespace App\Traits;

trait FilterableTrait
{
	public function applyFilters($query, $filters) {
		$query->when($filters['search'] ?? null, function ($query, $search) {
			// Common search logic
			$query->where(function ($query) use ($search) {
				$query->where('name', 'like', '%'.$search.'%')
					->orWhere('email', 'like', '%'.$search.'%')
					// Additional search conditions if needed
					->orWhere('city', 'like', '%'.$search.'%')
					->orWhereHas('types', function ($query) use ($search) {
						$query->where('name', 'like', '%'.$search.'%');
					});
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