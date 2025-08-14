/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* light gray */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* gold */
        background: "var(--color-background)", /* cream canvas warmth */
        foreground: "var(--color-foreground)", /* charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* warm terracotta warmth */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* sage green sophistication */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* helpful concern */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* subtle depth layering */
          foreground: "var(--color-muted-foreground)", /* clear hierarchy maintenance */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* gold premium moments */
          foreground: "var(--color-accent-foreground)", /* charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle depth layering */
          foreground: "var(--color-card-foreground)", /* charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* natural confirmation */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle urgency */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* helpful concern */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          goldenrod: "var(--color-brand-goldenrod)", /* goldenrod */
          peru: "var(--color-brand-peru)", /* peru */
          beige: "var(--color-brand-beige)", /* beige */
          'dark-goldenrod': "var(--color-brand-dark-goldenrod)", /* dark goldenrod */
          'dark-sea-green': "var(--color-brand-dark-sea-green)", /* dark sea green */
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'golden-xs': 'var(--spacing-xs)', /* 8px */
        'golden-sm': 'var(--spacing-sm)', /* 13px */
        'golden-md': 'var(--spacing-md)', /* 21px */
        'golden-lg': 'var(--spacing-lg)', /* 34px */
        'golden-xl': 'var(--spacing-xl)', /* 55px */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'brand': 'var(--shadow-brand)',
        'subtle': 'var(--shadow-subtle)',
        'culinary': '0 4px 20px rgba(184, 134, 11, 0.15)',
        'elevation': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        'golden': '1.618',
        'dish': '4/3',
        'hero': '16/9',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}