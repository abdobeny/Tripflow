<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'price_per_person' => $this->price_per_person,
            'duration_hours' => $this->duration_hours,
            'image_url' => $this->image ? asset('storage/' . $this->image) : null,
            'category' => new CategoryResource($this->whenLoaded('category')),
        ];
    }
}
