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
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next, string $role): Response {

		$roles = [
			'SuperAdmin' => 1,
			'Admin' => 2,
			'Company' => 3,
			'User' => 4,
		];

		$user = auth()->user();

		if (!$user || !isset($roles[$role]) || $user->role_id != $roles[$role]) {
			abort(403);
		}

		return $next($request);
	}
}
