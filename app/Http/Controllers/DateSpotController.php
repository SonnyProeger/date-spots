<?php

namespace App\Http\Controllers;

use App\Models\DateSpot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DateSpotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dateSpots = DateSpot::all();

        foreach ($dateSpots as $dateSpot) {

            $dateSpot->reviews_count = $dateSpot->getReviewsCountAttribute();
        }

        return Inertia::render('DateSpots', [
            'dateSpots' => $dateSpots,
        ]);
    }

    /**
     * Display a listing of the resource by location
     */

    public function showByLocation($city)
    {
        $query = DateSpot::query();

        if ($city) {
            $query->where('city', $city);
        }

        $dateSpots = $query->get();

        return Inertia::render('DateSpots', [
            'dateSpots' => $dateSpots,
            'city' => $city,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Use the $id to fetch the Spot from the database
        $dateSpot = dateSpot::query()->findOrFail($id);

        // You can access the $type and $name directly from the URL parameters

        return Inertia::render('DateSpotDetail', [
            'dateSpot' => $dateSpot,
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DateSpot $dateSpot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DateSpot $dateSpot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DateSpot $dateSpot)
    {
        //
    }
}
