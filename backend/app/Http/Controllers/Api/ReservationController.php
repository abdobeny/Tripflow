<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use App\Models\Service;
use App\Http\Resources\ReservationResource;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'service_id' => 'required|exists:services,id',
            'traveler_count' => 'required|integer|min:1',
            'travel_date' => 'required|date|after:today',
            'phone' => 'required|string|max:20',
        ]);
        $service = Service::findOrFail($validated['service_id']);
        $totalPrice = $service->price_per_person * $validated['traveler_count'];
        $reservation =  Reservation::create([
            'user_id' => $request->user()->id,
            'service_id' => $validated['service_id'],
            'traveler_count' => $validated['traveler_count'],
            'total_price' => $totalPrice,
            'travel_date' => $validated['travel_date'],
            'phone' => $validated['phone'],
            'status' => 'pending',
        ]);
        return new ReservationResource($reservation->load(['user', 'service']));
    }
}
