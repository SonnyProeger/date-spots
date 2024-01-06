<?php

namespace App\Models;

use Database\Factories\ReviewFactory;
use DateTime;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\Review
 *
 * @property int $id
 * @property int $user_id
 * @property int $datespot_id
 * @property string $content
 * @property int $rating
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Datespot|null $datespot
 * @property-read User $user
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
 * @property string $title
 * @property string $comment
 * @property string $date_visited
 * @method static Builder|Review whereComment($value)
 * @method static Builder|Review whereDateVisited($value)
 * @method static Builder|Review whereTitle($value)
 * @mixin Eloquent
 */
class Review extends Model
{
	use HasFactory;
	use SoftDeletes;

	protected $fillable = [
		'datespot_id',
		'user_id',
		'title',
		'comment',
		'rating',
		'date_visited',
	];

	public function user(): BelongsTo {
		return $this->belongsTo(User::class);
	}

	public function datespot(): BelongsTo {
		return $this->belongsTo(Datespot::class);
	}

	public function getFormattedDateForCreatedOn(): string {
		$createdOn = Carbon::parse($this->created_at);

		if ($createdOn->isToday()) {
			return 'Today';
		} elseif ($createdOn->isYesterday()) {
			return 'Yesterday';
		} elseif ($createdOn->isCurrentYear()) {
			return 'on '.$createdOn->format('j F');
		} else {
			return 'on '.$createdOn->format('j F Y');
		}
	}

	public function getFormattedDateForDateVisited(): string {
		$formattedDate = DateTime::createFromFormat('Y-m-d', $this->date_visited)
			->format('F Y');

		return $formattedDate;
	}
}
