<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		return Inertia::render('Admin/Dashboard/Index');
	}

}
