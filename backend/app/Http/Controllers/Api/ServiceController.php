<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
     public function index(Request $request)
    {
        $services = Service::with(['category', 'destination'])
            ->when($request->category_id, fn ($q) =>
                $q->where('category_id', $request->category_id)
            )
            ->when($request->destination_id, fn ($q) =>
                $q->where('destination_id', $request->destination_id)
            )
            ->where('is_active', true)
            ->get();

        return ServiceResource::collection($services);
    }

    public function show(Service $service){
        return new ServiceResource($service->load('category'));
    }
}
