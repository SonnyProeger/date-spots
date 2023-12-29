<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Eloquent;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property string|null $profile_photo_path
 * @property int|null $role_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Collection<int, Datespot> $datespots
 * @property-read int|null $datespots_count
 * @property-read DatabaseNotificationCollection<int, DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read string $profile_photo_url
 * @property-read Collection<int, Review> $reviews
 * @property-read int|null $reviews_count
 * @property-read Role|null $role
 * @property-read Collection<int, PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static UserFactory factory($count = null, $state = [])
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User onlyTrashed()
 * @method static Builder|User query()
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereDeletedAt($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereEmailVerifiedAt($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereName($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User whereProfilePhotoPath($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereRoleId($value)
 * @method static Builder|User whereTwoFactorConfirmedAt($value)
 * @method static Builder|User whereTwoFactorRecoveryCodes($value)
 * @method static Builder|User whereTwoFactorSecret($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @method static Builder|User withTrashed()
 * @method static Builder|User withoutTrashed()
 * @mixin Eloquent
 */
class User extends Authenticatable implements MustVerifyEmail
{
	use HasApiTokens;
	use HasFactory;
	use HasProfilePhoto;
	use Notifiable;
	use TwoFactorAuthenticatable;
	use SoftDeletes;


	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'name',
		'email',
		'password',
		'role_id',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
		'two_factor_recovery_codes',
		'two_factor_secret',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
	];

	/**
	 * The accessors to append to the model's array form.
	 *
	 * @var array<int, string>
	 */
	protected $appends = [
		'profile_photo_url',
	];

	protected function defaultProfilePhotoUrl(): string {
		$name = trim(collect(explode(' ', $this->name))->map(function ($segment) {
			return mb_substr($segment, 0, 1);
		})->join(' '));

		return 'https://ui-avatars.com/api/?name='.urlencode($name).'&color=FFFFFF&background=B76E79';
	}

	public function role() {
		return $this->belongsTo(Role::class);
	}

	public function datespots(): HasMany {
		return $this->hasMany(Datespot::class);
	}

	public function reviews(): HasMany {
		return $this->hasMany(Review::class);
	}

	public function isSuperAdmin(): bool {
		return $this->role->name === 'SuperAdmin';
	}

	public function isAdmin(): bool {
		return $this->role->name === 'Admin';
	}

	public function isCompany(): bool {
		return $this->role->name === 'Company';
	}

	public function isRegularUser(): bool {
		return $this->role->name === 'User';
	}

	public function ownsDatespot(Datespot $datespot): bool {
		return $this->id === $datespot->user_id;
	}

	protected static function booted(): void {
		static::creating(function ($user) {
			if (!$user->profile_photo_path) {
				$nameInitials = collect(explode(' ', $user->name))
					->map(fn($segment) => mb_substr($segment, 0, 1))
					->join('');

				$user->profile_photo_path = 'https://ui-avatars.com/api/?name='.
					urlencode($nameInitials).'&color=BE123B&background=DDBBC0';
			}
		});
	}
}
