<?php

namespace App\Traits;

trait CrudOperationsTrait
{
	use FilterableTrait;

	public function commonIndexLogic($model, $filters = []) {

		$query = $model::query()->orderBy('name');

		return $this->applyFilters($query, $filters);
	}


	public function create() {
		// Logic for create method
	}

	public function store() {
		// Logic for store method
	}

	public function edit() {
		// Logic for edit method
	}

	public function update() {
		// Logic for update method
	}

	public function destroy() {
		// Logic for destroy method
	}

	// You can add more methods as needed...

}