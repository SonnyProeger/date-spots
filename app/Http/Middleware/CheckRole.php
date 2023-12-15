<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  Closure(Request): (Response)  $next
	 */
	public function handle(Request $request, Closure $next, ...$roles): Response {
		$allowedRoles = ['SuperAdmin', 'Admin', 'Company', 'User'];

		$user = auth()->user();

		if (!$user) {
			abort(403);
		}

		$rolesToCheck = collect($roles)
			->filter(function ($role) use ($allowedRoles) {
				return in_array($role, $allowedRoles);
			})
			->toArray();

		if (empty($rolesToCheck) || !in_array($user->role->name, $rolesToCheck)) {
			abort(403);
		}

		return $next($request);
	}
}
