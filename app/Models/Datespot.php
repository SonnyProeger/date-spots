<?php

namespace App\Models;

use Database\Factories\DatespotFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;
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
 * @property Carbon|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, Category> $categories
 * @property-read int|null $categories_count
 * @property-read MediaCollection<int, Media> $media
 * @property-read int|null $media_count
 * @property-read Collection<int, Review> $reviews
 * @property-read int|null $reviews_count
 * @property-read Collection<int, Subcategory> $subCategories
 * @property-read int|null $sub_categories_count
 * @property-read Collection<int, Type> $types
 * @property-read int|null $types_count
 * @property-read User|null $user
 * @method static DatespotFactory factory($count = null, $state = [])
 * @method static Builder|Datespot newModelQuery()
 * @method static Builder|Datespot newQuery()
 * @method static Builder|Datespot onlyTrashed()
 * @method static Builder|Datespot query()
 * @method static Builder|Datespot whereBusinessStatus($value)
 * @method static Builder|Datespot whereCity($value)
 * @method static Builder|Datespot whereCountry($value)
 * @method static Builder|Datespot whereCreatedAt($value)
 * @method static Builder|Datespot whereDatespotId($value)
 * @method static Builder|Datespot whereDeletedAt($value)
 * @method static Builder|Datespot whereEmail($value)
 * @method static Builder|Datespot whereHouseNumber($value)
 * @method static Builder|Datespot whereIconUrl($value)
 * @method static Builder|Datespot whereId($value)
 * @method static Builder|Datespot whereLat($value)
 * @method static Builder|Datespot whereLng($value)
 * @method static Builder|Datespot whereName($value)
 * @method static Builder|Datespot whereOpenNow($value)
 * @method static Builder|Datespot wherePhoneNumber($value)
 * @method static Builder|Datespot wherePosition($value)
 * @method static Builder|Datespot wherePostalCode($value)
 * @method static Builder|Datespot whereProvince($value)
 * @method static Builder|Datespot whereStreetName($value)
 * @method static Builder|Datespot whereTagline($value)
 * @method static Builder|Datespot whereUpdatedAt($value)
 * @method static Builder|Datespot whereUserId($value)
 * @method static Builder|Datespot whereWebsite($value)
 * @method static Builder|Datespot withTrashed()
 * @method static Builder|Datespot withoutTrashed()
 * @mixin Eloquent
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
		'website',
		'email',
		'position',
	];


	public function getAddressesAttribute(): string {
		return $this->street_name.' '.$this->house_number.', '.$this->postal_code.' '.$this->city;
	}

	public function getCityAndStateAttribute(): string {
		return $this->city.', '.$this->province;
	}

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

	public function registerMediaCollections(): void {
		$this->addMediaCollection('images')
			->useDisk('s3');

		// Define a collection for videos
		$this->addMediaCollection('videos')
			->useDisk('s3');
	}
}
