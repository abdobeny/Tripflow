<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use App\Models\Service;
use App\Http\Resources\ReservationResource;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(Request $request)
    {
        $reservations = $request->user()
            ->reservations()
            ->with('service')
            ->latest()
            ->get();
        return ReservationResource::collection($reservations);
    }
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
    public function whatsapp(Request $request, Reservation $reservation)
    {
        if ($reservation->user_id !== $request->user()->id){
            abort(403, 'This is not your reservation.');
        }
        $phone = config('services.whatsapp.number');
        $message = urlencode(
            "Hello! I just made a reservation on TripFlow.\n" .
            "Booking ID: #{$reservation->id}\n" .
            "Service: {$reservation->service->name}\n" .
            "Date: {$reservation->travel_date}\n" .
            "Travelers: {$reservation->traveler_count}\n" .
            "Total: \${$reservation->total_price}\n\n" .
            "Please confirm my booking."
        );
        return response()->json([
            'url' => "https://wa.me/{$phone}?text={$message}"
        ]);
    }
}
