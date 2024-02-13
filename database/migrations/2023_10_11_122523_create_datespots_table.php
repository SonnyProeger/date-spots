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
        Schema::create('datespots', function (Blueprint $table) {
            $table->id();
            $table->string('datespot_id')->unique();
            $table->string('name');
            $table->string('tagline');
            $table->float('lat', 10, 7);
            $table->float('lng', 10, 7);
            $table->string('street_name');
            $table->integer('house_number');
            $table->string('postal_code');
            $table->string('city');
            $table->string('province');
            $table->string('country')->default('Netherlands');
            $table->string('phone_number');
            $table->string('website');
            $table->string('email')->unique();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->integer('position')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('datespots', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('datespots');
    }
};
