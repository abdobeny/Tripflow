<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'City Tours', 'description' => 'Explore the vibrant cities of Morocco', 'icon' => 'building'],
            ['name' => 'Desert Safaris', 'description' => 'Experience the magic of the Sahara', 'icon' => 'sun'],
            ['name' => 'Mountain Treks', 'description' => 'Hike the majestic Atlas Mountains', 'icon' => 'mountain'],
            ['name' => 'Coastal Escapes', 'description' => 'Relax by the beautiful Moroccan coastlines', 'icon' => 'water'],
        ];

        foreach ($categories as $cat) {
            Category::create([
                'name' => $cat['name'],
                'slug' => Str::slug($cat['name']),
                'description' => $cat['description'],
                'icon' => $cat['icon'],
            ]);
        }
    }
}
