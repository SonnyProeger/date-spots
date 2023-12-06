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
		$rolesMapping = [
			'SuperAdmin' => 1,
			'Admin' => 2,
			'Company' => 3,
			'User' => 4,
		];

		$user = auth()->user();

		if (!$user) {
			abort(403);
		}

		$allowedRoleIds = collect($roles)
			->filter(function ($role) use ($rolesMapping) {
				return isset($rolesMapping[$role]);
			})
			->map(fn($role) => $rolesMapping[$role])
			->toArray();

		if (empty($allowedRoleIds) || !in_array($user->role_id, $allowedRoleIds)) {
			abort(403);
		}

		return $next($request);
	}
}
