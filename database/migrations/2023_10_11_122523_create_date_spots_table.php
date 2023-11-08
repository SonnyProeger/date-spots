<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('date_spots', function (Blueprint $table) {
            $table->id();
            $table->string('date_spot_id')->unique();
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
            $table->boolean('open_now');
            $table->string('photo_url');
            $table->string('icon_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('date_spots');
    }
};
