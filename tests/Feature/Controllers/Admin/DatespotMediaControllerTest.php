<?php

namespace Feature\Controllers\Admin;

use Tests\TestCase;

class DatespotMediaControllerTest extends TestCase
{
	/**
	 * A basic feature test example.
	 */
	public function test_example(): void {
		$response = $this->get('/');

		$response->assertStatus(200);
	}
}
