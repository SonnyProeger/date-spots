<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AdminDashboardController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		return Inertia::render('Admin/AdminDashboard');
	}

}
