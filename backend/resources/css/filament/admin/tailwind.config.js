import preset from '../../../../vendor/filament/filament/tailwind.config.preset'

export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                // Keep these for custom classes, but don't force them as default 'primary'
                brand: {
                    gold: '#FF9F1C',
                    goldLight: '#FFBF69',
                    blue: '#2563eb',
                    navy: '#003366',
                    navyLight: '#2D5DA1',
                }
            },
            boxShadow: {
                'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            },
        },
    },
}