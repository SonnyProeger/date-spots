<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Datespot;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DatespotMediaController extends Controller
{
	public function index($id) {
		$datespot = Datespot::findOrFail($id);
		$media = $datespot->getMedia('*')->map(function ($item) {
			return [
				'id' => $item->id,
				'url' => $item->getTemporaryUrl(Carbon::now()->addMinutes(5)),
				'thumb' => $item->getTemporaryUrl(Carbon::now()->addMinutes(5), 'thumb'),
				'tiny' => $item->getTemporaryUrl(Carbon::now()->addMinutes(5), 'tiny'),
				'size' => $item->human_readable_size,
				'mime' => $item->mime_type,
				'type' => $item->type,
				'isHighlighted' => $item->is_highlighted,
			];
		});

		return Inertia::render('Admin/Pages/Media/Index', [
			'datespot' => $datespot,
			'media' => $media,
		]);
	}

	public function show($id, $mediaId) {
		$datespot = Datespot::findOrFail($id);
		$media = $datespot->getMedia($mediaId);

		return Inertia::render('Admin/Pages/Media/Index', [
			'media' => $media,
		]);
	}

	/**
	 * @throws FileDoesNotExist
	 * @throws FileIsTooBig
	 */
	public function store(Request $request, $id) {
		$datespot = Datespot::findOrFail($id);

		$request->validate([
			'file' => 'required|file|max:4096',
		]);

		$file = $request->file('file');


		$extension = $file->getClientOriginalExtension();


		// Determine whether the file is an image or video based on the extension
		if (in_array($extension, ['jpeg', 'png'])) {
			$directory = 'images';
		} elseif ($extension === 'mp4') {
			$directory = 'videos';
		} else {
			return Redirect::back()->with('error', 'Unsupported file type.');
		}

		$datespot->addMediaFromRequest('file')
			->toMediaCollection($directory, 's3');

		return Redirect::back()->with('success', 'Media successfully uploaded.');

	}

	public function destroy($id, $mediaId) {
		$Datespot = Datespot::findOrFail($id);
		$media = $Datespot->getMedia($mediaId);

		foreach ($media as $item) {
			$item->delete();
		}

		return redirect()->route('datespots.index');
	}

	public function updateHighlightStatus(Request $request) {
		$mediaId = $request->input('mediaId');
		$isHighlighted = $request->input('isHighlighted');

		$media = Media::findOrFail($mediaId);
		$datespotId = $media->model_id;

		$datespot = Datespot::findOrFail($datespotId);

		$highlightedMediaCount = $this->getHighlightedMediaCount($datespot);

		if ($highlightedMediaCount >= 3) {
			return Redirect::back()->with('error',
				'Maximum limit of 3 highlighted media items reached for this Datespot');
		}

		if ($isHighlighted) {
			$this->removeFromHighlights($media);
			return Redirect::back()->with('success', 'Removed from Highlights.');
		} else {
			$this->addToHighlights($media);
			return Redirect::back()->with('success', 'Added to Highlights.');
		}
	}

	private function getHighlightedMediaCount(Datespot $datespot): int {
		return $datespot->getMedia()->where('is_highlighted', true)->count();
	}

	private function addToHighlights(Media $media): void {
		$media->update(['is_highlighted' => true]);
	}

	private function removeFromHighlights(Media $media): void {
		$media->update(['is_highlighted' => false]);
	}
}
