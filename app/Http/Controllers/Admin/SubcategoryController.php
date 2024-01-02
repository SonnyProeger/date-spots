<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Subcategory;
use App\Traits\CrudOperationsTrait;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SubcategoryController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */

	public function index() {
		$this->authorize('viewAny', Subcategory::class);

		$filters = Request::all('search', 'trashed');

		$query = $this->commonIndexLogic(Subcategory::class, $filters);

		$subcategories = $query->with('category.type:id,name', 'category:id,name,type_id')
			->paginate(10)
			->withQueryString()
			->through(function ($subcategory) {
				return [
					'id' => $subcategory->id,
					'name' => $subcategory->name,
					'category' => $subcategory->category->name,
					'type' => $subcategory->category->type->name,
					'deleted_at' => $subcategory->deleted_at,
				];
			});

		return Inertia::render('Admin/Subcategories/Index', [
			'subcategories' => $subcategories,
			'filters' => $filters,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		$this->authorize('create', Subcategory::class);

		return Inertia::render('Admin/Subcategories/Create', [
			'categories' => Category::all(),
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$this->authorize('viewAny', Subcategory::class);

		Request::validate([
			'name' => ['required', 'max:50', Rule::unique('subcategories')],
			'category_id' => ['required']
		]);

		Subcategory::create([
			'name' => Request::get('name'),
			'category_id' => Request::get('category_id'),
		]);

		return Redirect::route('subcategories.index')->with('success', 'Subcategory created.');
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		$subcategory = Subcategory::with('category')->withTrashed()->find($id);
		$this->authorize('update', $subcategory);

		return Inertia::render('Admin/Subcategories/Edit', [
			'subcategory' => $subcategory,
			'categories' => Category::all(),
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Subcategory $subcategory) {
		$this->authorize('update', $subcategory);

		Request::validate([
			'name' => ['required', 'max:50', Rule::unique('subcategories')],
			'category_id' => ['required'],
		]);

		$subcategory->update(Request::only('name'));
		$subcategory->update(Request::only('category_id'));


		return Redirect::back()->with('success', 'Subcategory updated.');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Subcategory $subcategory) {
		$this->authorize('delete', $subcategory);

		$subcategory->delete();
		return Redirect::route('subcategories.index')->with('success', "$subcategory->name deleted.");
	}

	public function restore(Subcategory $subcategory) {
		$this->authorize('restore', $subcategory);
		$subcategory->restore();
		return Redirect::back()->with('success', 'Subcategory restored.');
	}
}
