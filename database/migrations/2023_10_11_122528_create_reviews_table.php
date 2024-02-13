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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('datespot_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('comment');
            $table->integer('rating');
            $table->date('date_visited');
            $table->timestamps();
            $table->softDeletes();

            // Unique constraint to ensure a user can review a datespot only once
            $table->unique(['user_id', 'datespot_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
