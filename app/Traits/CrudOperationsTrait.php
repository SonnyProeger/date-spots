<?php

namespace App\Traits;

trait CrudOperationsTrait
{
    use FilterableTrait;

    public function commonIndexLogic($model, $filters)
    {

        $query = $model::query()->orderBy('name');

        return $this->applyFilters($query, $filters);
    }
}
