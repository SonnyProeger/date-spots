<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Type;
use App\Traits\CrudOperationsTrait;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryController extends Controller
{
	use CrudOperationsTrait;

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$this->authorize('viewAny', Category::class);

		$filters = Request::all('search', 'trashed');

		$query = $this->commonIndexLogic(Category::class, $filters);


		$categories = $query->with(['type:id,name'])
			->paginate(10)
			->withQueryString()
			->through(function ($category) {
				return [
					'id' => $category->id,
					'name' => $category->name,
					'type' => $category->type->name,
					'deleted_at' => $category->deleted_at,
				];
			});

		return Inertia::render('Admin/Pages/Categories/Index', [
			'categories' => $categories,
			'filters' => $filters,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		$this->authorize('create', Category::class);

		return Inertia::render('Admin/Pages/Categories/Create', [
			'types' => Type::all(),
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$this->authorize('viewAny', Category::class);

		Request::validate([
			'name' => ['required', 'max:50', Rule::unique('categories')],
			'type_id' => ['required']
		]);

		Category::create([
			'name' => Request::get('name'),
			'type_id' => Request::get('type_id'),
		]);

		return Redirect::route('categories.index')->with('success', 'Category created.');
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Category $category) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id) {
		$category = Category::withTrashed()->find($id);
		$this->authorize('update', $category);

		return Inertia::render('Admin/Pages/Categories/Edit', [
			'category' => $category,
			'types' => Type::all(),
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Category $category) {
		$this->authorize('update', $category);

		Request::validate([
			'name' => ['required', 'max:50', Rule::unique('categories')],
		]);

		$category->update(Request::only('name'));

		return Redirect::back()->with('success', 'Category updated.');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Category $category) {
		$this->authorize('delete', $category);

		$category->delete();
		return Redirect::route('categories.index')->with('success', "$category->name deleted.");

	}

	public function restore(Category $category) {
		$this->authorize('restore', $category);
		$category->restore();
		return Redirect::back()->with('success', 'Category restored.');
	}
}
