<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Filament\FontProviders\GoogleFontProvider; // <-- Added this

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('admin')
            ->path('admin')
            ->login()
            
            // 1. Properly load the Google Font (requires the provider to actually fetch it)
            ->font('Plus Jakarta Sans', provider: GoogleFontProvider::class)
            
            // 2. Set the branding name and custom logo view
            ->brandName('TripFlow')
            ->brandLogo(fn () => view('vendor.filament.logo'))
            
            // 3. Standard Filament v3 method for custom themes via Vite
            ->theme(asset('css/filament/admin/theme.css'))
            // 4. Color Palette UX Fixes
            ->colors([
                // Use standard interactive blue for primary actions (Save, Create, etc.) so the UI stays calm
                'primary' => Color::Blue,
                
                // Keep your slate gray for the backgrounds/text
                'gray' => Color::Slate,
                
                // Map your exact Gold to 'warning' so it pops beautifully when needed, without being on every single button
                'warning' => [
                    50 => '#fdf8ed',
                    100 => '#fcf1d1',
                    200 => '#f9e0a6',
                    300 => '#f6c970',
                    400 => '#f3ab3f',
                    500 => '#ff9f1c', // Your TripFlow Gold
                    600 => '#d97b14',
                    700 => '#b45c11',
                    800 => '#924914',
                    900 => '#783d13',
                    950 => '#461f06',
                ],
                
                // Added your Moroccan Navy as the 'info' color for nice accent badges/icons
                'info' => [
                    50 => '#f0f5fa',
                    100 => '#e0eaf4',
                    200 => '#c6d9ea',
                    300 => '#9bc0dd',
                    400 => '#6b9fcc',
                    500 => '#4a82b8',
                    600 => '#38689c',
                    700 => '#2d537f',
                    800 => '#27476a',
                    900 => '#003366', // Your TripFlow Navy
                    950 => '#152b43',
                ],
            ])
            
            ->discoverResources(in: app_path('Filament/Admin/Resources'), for: 'App\\Filament\\Admin\\Resources')
            ->discoverPages(in: app_path('Filament/Admin/Pages'), for: 'App\\Filament\\Admin\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Admin/Widgets'), for: 'App\\Filament\\Admin\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
