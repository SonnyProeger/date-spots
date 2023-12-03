<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * App\Models\Datespot
 *
 * @property int $id
 * @property string $datespot_id
 * @property string $name
 * @property string $tagline
 * @property string $lat
 * @property string $lng
 * @property string $street_name
 * @property string $house_number
 * @property string $postal_code
 * @property string $city
 * @property string $province
 * @property string $country
 * @property string $phone_number
 * @property string $business_status
 * @property string $website
 * @property string $email
 * @property int $open_now
 * @property string $icon_url
 * @property int|null $user_id
 * @property int|null $position
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, Media> $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Review> $reviews
 * @property-read int|null $reviews_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Subcategory> $subCategories
 * @property-read int|null $sub_categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Type> $types
 * @property-read int|null $types_count
 * @property-read \App\Models\User|null $user
 * @method static \Database\Factories\DatespotFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot query()
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereBusinessStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereDatespotId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereHouseNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereIconUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereOpenNow($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereStreetName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereTagline($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot whereWebsite($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Datespot withoutTrashed()
 * @mixin \Eloquent
 */
class Datespot extends Model implements hasMedia
{
	use InteractsWithMedia;
	use HasFactory;
	use SoftDeletes;

	protected $fillable = [
		'datespot_id',
		'name',
		'tagline',
		'lat',
		'lng',
		'street_name',
		'house_number',
		'postal_code',
		'city',
		'province',
		'country',
		'phone_number',
		'business_status',
		'website',
		'email',
		'open_now',
		'icon_url',
		'position',
	];


	public function reviews(): HasMany {
		return $this->hasMany(Review::class);
	}

	public function categories(): BelongsToMany {
		return $this->belongsToMany(Category::class, 'datespot_category');
	}

	public function subCategories(): BelongsToMany {
		return $this->belongsToMany(Subcategory::class, 'datespot_subcategory');
	}

	public function types(): BelongsToMany {
		return $this->belongsToMany(Type::class, 'datespot_type');
	}

	public function user(): BelongsTo {
		return $this->belongsTo(User::class);
	}

	public function registerMediaConversions(Media $media = null): void {
		$this
			->addMediaConversion('preview')
			->fit(Manipulations::FIT_CROP, 300, 300)
			->nonQueued();

		$this->addMediaConversion('thumb')
			->width(128)
			->height(128)
			->sharpen(10);

		$this->addMediaConversion('tiny')
			->width(64)
			->height(64)
			->sharpen(10);
	}
}
