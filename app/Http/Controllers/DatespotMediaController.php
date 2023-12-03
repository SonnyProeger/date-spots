<?php

namespace App\Http\Controllers;

use App\Models\Datespot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DatespotMediaController extends Controller
{
	public function index($id) {
		$datespot = Datespot::findOrFail($id);
		$media = $datespot->getMedia('*')->map(function ($item) {
			return [
				'id' => $item->id,
				'url' => $item->original_url,
				'thumb' => $item->getUrl('thumb'),
				'tiny' => $item->getUrl('tiny'),
				'size' => $item->human_readable_size,
				'mime' => $item->mime_type,
				'type' => $item->type,
			];
		});;

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

	public function store(Request $request, $id) {
		$datespot = Datespot::findOrFail($id);

		$request->validate([
			'file' => 'required|file|max:2048',
		]);

		$file = $request->file('file');

		Storage::put('file.jpg', $file);


		$extension = $file->getClientOriginalExtension();

		// Generate a unique filename using UUID
		$uniqueFileName = Str::uuid()->toString().'.'.$extension;

		// Determine whether the file is an image or video based on the extension
		if (in_array($extension, ['jpeg', 'png'])) {
			$directory = 'images';
		} elseif ($extension === 'mp4') {
			$directory = 'videos';
		} else {
			return Redirect::back()->with('error', 'Unsupported file type.');
		}


		$path = $file->storeAs("media/{$datespot->datespot_id}/$directory", $uniqueFileName);
		$datespot->addMediaFromRequest('file')->toMediaCollection($directory);

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
}
