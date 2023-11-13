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
		Schema::create('date_spot_subcategory', function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger('subcategory_id');
			$table->unsignedBigInteger('date_spot_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('date_spot_subcategory');
	}
};
