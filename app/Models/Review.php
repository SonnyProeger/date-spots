<?php

namespace App\Models;

use Database\Factories\ReviewFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Review
 *
 * @property int $id
 * @property int $user_id
 * @property int $datespot_id
 * @property string $content
 * @property int $rating
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Datespot|null $datespot
 * @property-read \App\Models\User $user
 * @method static ReviewFactory factory($count = null, $state = [])
 * @method static Builder|Review newModelQuery()
 * @method static Builder|Review newQuery()
 * @method static Builder|Review onlyTrashed()
 * @method static Builder|Review query()
 * @method static Builder|Review whereContent($value)
 * @method static Builder|Review whereCreatedAt($value)
 * @method static Builder|Review whereDatespotId($value)
 * @method static Builder|Review whereDeletedAt($value)
 * @method static Builder|Review whereId($value)
 * @method static Builder|Review whereRating($value)
 * @method static Builder|Review whereUpdatedAt($value)
 * @method static Builder|Review whereUserId($value)
 * @method static Builder|Review withTrashed()
 * @method static Builder|Review withoutTrashed()
 * @mixin \Eloquent
 */
class Review extends Model
{
	use HasFactory;
	use SoftDeletes;


	public function user(): BelongsTo {
		return $this->belongsTo(User::class);
	}

	public function datespot(): BelongsTo {
		return $this->belongsTo(Datespot::class);
	}

}
