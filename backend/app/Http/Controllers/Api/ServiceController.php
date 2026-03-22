<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
     public function index()
    {
        $services = Service::with('category')->where('is_active', true)->get();
        
        return ServiceResource::collection($services);
    }
    public function show(Service $service){
        return new ServiceResource($service->load('category'));
    }
}
