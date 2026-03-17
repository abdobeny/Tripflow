<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cityCategory = Category::where('slug', 'city-tours')->first();
        $desertCategory = Category::where('slug', 'desert-safaris')->first();
        
        if ($cityCategory && $desertCategory) {
            $services = [
                [
                    'category_id' => $cityCategory->id,
                    'name' => 'Marrakech Medina Guided Tour',
                    'slug' => Str::slug('Marrakech Medina Guided Tour'),
                    'description' => 'Discover the secrets of the ancient Medina of Marrakech.',
                    'price_per_person' => 45.00,
                    'duration_hours' => 4,
                ],
                [
                    'category_id' => $desertCategory->id,
                    'name' => 'Merzouga 3-Day Sahara Safari',
                    'slug' => Str::slug('Merzouga 3-Day Sahara Safari'),
                    'description' => 'Sleep under the stars in the Sahara desert.',
                    'price_per_person' => 150.00,
                    'duration_hours' => 72,
                ],
            ];

            foreach ($services as $service) {
                Service::create($service);
            }
        }
    }
}
