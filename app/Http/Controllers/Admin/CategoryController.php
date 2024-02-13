<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Type;
use App\Traits\CrudOperationsTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryController extends Controller
{
    use CrudOperationsTrait;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Category::class);

        $filters = $request->only('search', 'trashed');

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

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
            'filters' => $filters,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', Category::class);

        return Inertia::render('Admin/Categories/Create', [
            'types' => Type::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('viewAny', Category::class);

        $validatedData = $request->validate([
            'name' => ['required', 'max:50', Rule::unique('categories')],
            'type_id' => ['required'],
        ]);

        Category::create($validatedData);

        return Redirect::route('categories.index')->with('success', 'Category created.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::with('type')->withTrashed()->find($id);
        $this->authorize('update', $category);

        return Inertia::render('Admin/Categories/Edit', [
            'category' => $category,
            'types' => Type::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $this->authorize('update', $category);

        $validatedData = $request->validate([
            'name' => ['required', 'max:50', Rule::unique('categories')->ignore($category->id)],
            'type_id' => ['required'],
        ]);

        $category->update($validatedData);

        return Redirect::back()->with('success', 'Category updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $this->authorize('delete', $category);
        $category->delete();

        return Redirect::route('categories.index')->with('success', "$category->name deleted.");
    }

    public function restore(Category $category)
    {
        $this->authorize('restore', $category);
        $category->restore();

        return Redirect::back()->with('success', 'Category restored.');
    }
}
