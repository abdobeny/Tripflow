<?php

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', \App\Models\User::count())
                ->description('Registered accounts')
                ->color('info'),
            Stat::make('Total Bookings', \App\Models\Reservation::count())
                ->description('All time reservations')
                ->color('success'),
            Stat::make('Pending Approvals', \App\Models\Reservation::where('status', 'pending')->count())
                ->description('Need your attention')
                ->color('warning'),
            Stat::make('Total Revenue', '$' . number_format(\App\Models\Reservation::sum('total_price'), 2))
                    ->description('From all reservations')
                    ->color('primary'),
        ];
    }
}
