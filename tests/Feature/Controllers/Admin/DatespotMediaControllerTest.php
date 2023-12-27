<?php

namespace Feature\Controllers\Admin;

use App\Models\Datespot;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class DatespotMediaControllerTest extends TestCase
{
	use refreshDatabase;

	public function test_super_admin_can_view_any_media(): void {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);
		$datespot = Datespot::factory()->create();
		$file = UploadedFile::fake()->image('test_image.jpg');

		$datespot->addMedia($file)->toMediaCollection('images');

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media.0', function ($media) {
				$media->has('id')
					->has('url')
					->has('thumb')
					->has('tiny')
					->has('size')
					->has('mime')
					->has('isHighlighted')
					->has('type');
			})
		);
	}

	/** @test */
	public function test_super_admin_can_store_valid_images_in_images_directory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->image('test_image.jpg');

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_super_admin_can_store_valid_videos_in_videos_directory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);
		$datespot = Datespot::factory()->create();

		Storage::fake('s3');
		$file = UploadedFile::fake()->create('test_video.mp4', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/videos/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_super_admin_returns_error_for_unsupported_file_type() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->create('test_document.docx', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$response->assertRedirect();
		$response->assertSessionHas('error', 'Unsupported file type.');
	}

	/** @test */
	public function test_super_admin_can_delete_media() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$datespot = Datespot::factory()->create();

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/'.$media->id);

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully deleted.');

		Storage::disk('s3')->assertMissing($mediaPath);
	}

	/** @test */
	public function test_super_admin_cannot_delete_non_existent_media() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$datespot = Datespot::factory()->create();

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/doesntexist');

		$response->assertRedirect();
		$response->assertSessionHas('error', 'Media not found.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_super_admin_can_update_highlight_status_to_true() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);
		$datespot = Datespot::factory()->create();
		Storage::fake('s3');

		$file = UploadedFile::fake()->image('test_image.jpg');

		$media = $datespot->addMedia($file)->toMediaCollection('images');
		$response = $this->post(route('highlight-media', $datespot), [
			'mediaId' => $media->id,
			'isHighlighted' => false,
		]);

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Added to Highlights.');

		$this->assertTrue((bool) $datespot->getFirstMedia('images')->is_highlighted);
	}

	/** @test */
	public function test_super_admin_can_update_highlight_status_to_false() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);
		Storage::fake('s3');

		$datespot = Datespot::factory()->create();
		$file = UploadedFile::fake()->image('test_image.jpg');

		$media = $datespot->addMedia($file)->toMediaCollection('images');
		$response = $this->post(route('highlight-media', $datespot), [
			'mediaId' => $media->id,
			'isHighlighted' => true,
		]);

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Removed from Highlights.');

		$this->assertFalse((bool) $datespot->getFirstMedia('images')->is_highlighted);
	}

	public function test_super_admin_does_not_allow_more_than_three_highlighted_media_items_per_datespot() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();
		$media1 = $datespot->addMedia(UploadedFile::fake()->image('image1.jpg'))->toMediaCollection('images');
		$media2 = $datespot->addMedia(UploadedFile::fake()->image('image2.jpg'))->toMediaCollection('images');
		$media3 = $datespot->addMedia(UploadedFile::fake()->image('image3.jpg'))->toMediaCollection('images');

		$media4 = $datespot->addMedia(UploadedFile::fake()->image('image4.jpg'))->toMediaCollection('images');

		$media1->update(['is_highlighted' => true]);
		$media2->update(['is_highlighted' => true]);
		$media3->update(['is_highlighted' => true]);

		$response = $this->post(route('highlight-media', $datespot), [
			'mediaId' => $media4->id,
			'isHighlighted' => false,
		]);

		$response->assertRedirect();

		$response->assertSessionHas('error', 'Maximum limit of 3 highlighted media items reached for this Datespot');
	}

	public function test_admin_can_view_any_media(): void {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);
		$datespot = Datespot::factory()->create();

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media')
		);
	}

	/** @test */
	public function test_admin_can_store_valid_images_in_images_directory() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->image('test_image.jpg');

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_admin_can_store_valid_videos_in_videos_directory() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->create('test_video.mp4', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/videos/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_admin_returns_error_for_unsupported_file_type() {
		$admin = User::factory()->admin()->create();
		$this->actingAs($admin);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->create('test_document.docx', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);


		$response->assertRedirect();
		$response->assertSessionHas('error', 'Unsupported file type.');
	}

	/** @test */
	public function test_admin_can_delete_media() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		$datespot = Datespot::factory()->create();

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/'.$media->id);

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully deleted.');

		Storage::disk('s3')->assertMissing($mediaPath);
	}

	/** @test */
	public function test_admin_cannot_delete_non_existent_media() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		$datespot = Datespot::factory()->create();

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/doesntexist');

		$response->assertRedirect();
		$response->assertSessionHas('error', 'Media not found.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	public function test_company_can_view_media_of_own_datespots(): void {
		$company = User::factory()->company()->create();
		$this->actingAs($company);
		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media')
		);
	}

	public function test_company_cannot_view_media_of_other_datespots(): void {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create();
		$media = $datespot->getMedia();

		$response = $this->get(route('media.index', [$datespot, $media]));

		$response->assertStatus(403);
	}

	/** @test */
	public function test_company_can_store_valid_images_in_images_directory_from_own_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$file = UploadedFile::fake()->image('test_image.jpg');

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_company_can_store_valid_videos_in_videos_directory_from_own_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$file = UploadedFile::fake()->create('test_video.mp4', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/videos/'.$media->uuid;

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully uploaded.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_company_cannot_store_images_in_images_directory_from_unowned_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->image('test_image.jpg');

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$response->assertStatus(403);
	}

	/** @test */
	public function test_company_cannot_store_videos_in_videos_directory_from_unowned_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->create('test_video.mp4', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);
		$response->assertStatus(403);
	}

	/** @test */
	public function test_company_returns_error_for_unsupported_file_type_in_own_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$file = UploadedFile::fake()->create('test_document.docx', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);


		$response->assertRedirect();
		$response->assertSessionHas('error', 'Unsupported file type.');
	}

	/** @test */
	public function test_company_can_delete_media_from_own_datespot() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/'.$media->id);

		$response->assertRedirect();
		$response->assertSessionHas('success', 'Media successfully deleted.');

		Storage::disk('s3')->assertMissing($mediaPath);
	}

	/** @test */
	public function test_company_cannot_delete_non_existent_media_from_own_datespot() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		Storage::fake('s3');
		$file = UploadedFile::fake()->image('test_image.jpg');

		$this->post(route('media.store', $datespot), ['file' => $file]);

		$media = $datespot->getFirstMedia('*');
		$mediaPath = '/media/'.$datespot->datespot_id.'/images/'.$media->uuid;

		Storage::disk('s3')->assertExists($mediaPath);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/doesntexist');

		$response->assertRedirect();
		$response->assertSessionHas('error', 'Media not found.');

		Storage::disk('s3')->assertExists($mediaPath);
	}

	/** @test */
	public function test_company_cannot_delete_media_from_unowned_datespot() {
		$company = User::factory()->company()->create();
		$datespot = Datespot::factory()->create();

		$response = $this->actingAs($company)->delete('/admin/datespots/'.$datespot->id.'/media/1');

		$response->assertStatus(403);
	}


	public function test_regular_user_cannot_view_any_media(): void {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);
		$datespot = Datespot::factory()->create();

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(403);
	}

	/** @test */
	public function test_regular_user_cannot_store_images_in_images_directory() {
		$user = User::factory()->user()->create();
		$this->actingAs($user);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->image('test_image.jpg');

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);

		$response->assertStatus(403);
	}

	/** @test */
	public function test_regular_user_cannot_store_videos_in_videos_directory() {
		$user = User::factory()->user()->create();
		$this->actingAs($user);

		Storage::fake('s3');

		$datespot = Datespot::factory()->create();

		$file = UploadedFile::fake()->create('test_video.mp4', 1000);

		$response = $this->post(route('media.store', $datespot), ['file' => $file]);
		$response->assertStatus(403);
	}

	/** @test */
	public function test_regular_user_cannot_delete_media_from_any_datespot() {
		$user = User::factory()->user()->create();
		$datespot = Datespot::factory()->create();
		$this->actingAs($user);

		$response = $this->delete('/admin/datespots/'.$datespot->id.'/media/1');

		$response->assertStatus(403);
	}
}
