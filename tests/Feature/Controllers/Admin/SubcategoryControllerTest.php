<?php

namespace Feature\Controllers\Admin;

use Tests\TestCase;

class SubcategoryControllerTest extends TestCase
{
	/**
	 * A basic feature test example.
	 */
	public function test_example(): void {
		$response = $this->get('/');

		$response->assertStatus(200);
	}
}
