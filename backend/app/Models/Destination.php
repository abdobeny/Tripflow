<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    protected $fillable = ['name', 'country', 'description', 'image', 'is_active'];
    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }
}
