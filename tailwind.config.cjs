/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace']
            },
            colors: {
                primary: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b'
                },
                accent: {
                    DEFAULT: '#EC4899',
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#EC4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843'
                }
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'code::before': { content: '""' },
                        'code::after': { content: '""' },
                        'code': {
                            backgroundColor: theme('colors.gray.100'),
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.25rem',
                            fontWeight: '400'
                        },
                        a: {
                            color: '#EC4899',
                            '&:hover': { color: '#db2777' }
                        },
                        h1: { letterSpacing: '-0.025em' },
                        h2: { letterSpacing: '-0.025em' },
                        h3: { letterSpacing: '-0.015em' },
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: '#f472b6',
                            '&:hover': { color: '#f9a8d4' }
                        },
                        h1: { color: theme('colors.gray.100') },
                        h2: { color: theme('colors.gray.100') },
                        h3: { color: theme('colors.gray.100') },
                        h4: { color: theme('colors.gray.100') },
                        strong: { color: theme('colors.gray.100') },
                        code: {
                            color: theme('colors.gray.200'),
                            backgroundColor: theme('colors.gray.800')
                        },
                        blockquote: {
                            color: theme('colors.gray.400'),
                            borderLeftColor: theme('colors.gray.700')
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};
