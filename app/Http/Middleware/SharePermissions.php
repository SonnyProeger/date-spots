<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class SharePermissions
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response {
		$user = Auth::User();
		$permissions = $this->mapPermissions($user);
		Inertia::share([
			'can' => $permissions,
		]);
		return $next($request);
	}

	private function mapPermissions($user) {
		$policies = collect(File::allFiles(app_path('Policies')))
			->map(function ($file) {
				$className = 'App\\Policies\\'.pathinfo($file->getPathname(), PATHINFO_FILENAME);
				return new $className();
			});

		$permissions = [];

		$policies->each(function ($policy) use ($user, &$permissions) {
			$policyName = Str::snake(class_basename($policy));
			$policyName = str_replace('_policy', '', $policyName);

			$methods = collect(get_class_methods($policy))
				->reject(function ($method) {
					return in_array($method, ['__construct', 'handleAuthorizationException']);
				})
				->mapWithKeys(function ($method) use ($policy, $user, $policyName) {
					$methodParams = collect((new \ReflectionMethod($policy, $method))->getParameters())->count();
					if ($methodParams === 2) {
						$model = $this->getPolicyModel($policy);
						return [
							Str::kebab($method).'-'.Str::kebab($policyName) => $policy->$method($user, $model),
						];
					} else {
						return [
							Str::kebab($method).'-'.Str::kebab($policyName) => $policy->$method($user),
						];
					}
				});

			$permissions += $methods->toArray();
		});

		return $permissions;
	}

	private function getPolicyModel($policyClassName): ?Model {
		$modelName = Str::replaceLast('Policy', '', class_basename($policyClassName));
		$modelClassName = 'App\\Models\\'.$modelName;

		return class_exists($modelClassName) ? new $modelClassName() : null;
	}
}
