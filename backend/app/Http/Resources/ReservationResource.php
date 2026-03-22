<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'user' => $this->user->name,
        'tour' => $this->service->name,
        'traveler_count' => $this->traveler_count,
        'total_price' => $this->total_price,
        'travel_date' => $this->travel_date,
        'status' => $this->status,
    ];
    }
}
