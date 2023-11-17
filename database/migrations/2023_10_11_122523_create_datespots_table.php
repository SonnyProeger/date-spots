<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('datespots', function (Blueprint $table) {
			$table->id();
			$table->string('datespot_id')->unique();
			$table->string('name');
			$table->string('tagline');
			$table->decimal('lat', 10, 7);
			$table->decimal('lng', 10, 7);
			$table->string('street_name');
			$table->string('house_number');
			$table->string('postal_code');
			$table->string('city');
			$table->string('province');
			$table->string('country');
			$table->string('phone_number');
			$table->string('business_status');
			$table->string('website');
			$table->string('email')->unique();
			$table->boolean('open_now');
			$table->string('icon_url');
			$table->integer('position')->nullable()->unique();
			$table->unsignedBigInteger('company_id')->nullable();
			$table->foreign('company_id')->references('id')->on('users');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('datespots');
	}
};
