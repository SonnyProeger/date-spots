import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Primary Colors
                red: {
                    50: '#FEE2E2',
                    100: '#FECACA',
                    200: '#FCA5A5',
                    300: '#F87171',
                    400: '#EF4444', // Primary Accent
                    500: '#DC2626',
                    600: '#B91C1C',
                    700: '#991B1B',
                    800: '#7F1D1D',
                    900: '#63171B',
                },
                pink: {
                    50: '#FDF2F8',
                    100: '#FCE7F3',
                    200: '#FBCFE8',
                    300: '#F9A8D4',
                    400: '#F472B6',
                    500: '#EC4899', // Secondary Accent
                    600: '#DB2777',
                    700: '#BE185D',
                    800: '#9D174D',
                    900: '#831843',
                },

                // Neutral Colors
                cream: '#F8F5F2',
                deepPurple: '#663399',

                // Text Colors
                white: '#FFFFFF',
                black: '#000000',

                // Accent Colors
                gold: '#FFD700',
                roseGold: '#B76E79', //
            },
        },
    },
    plugins: [forms, typography],
};
