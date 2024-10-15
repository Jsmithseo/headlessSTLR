/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        burgendy: "#800020",
        darkGrey: "#999999",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.bold"),
              lineHeight: theme("lineHeight.tight"),
              marginTop: "0",
              marginBottom: "0",
              color: theme("colors.white"),
            },
            h2: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.semibold"),
              lineHeight: theme("lineHeight.snug"),
              marginTop: "0",
              marginBottom: "0",
              color: theme("colors.white"),
            },
            h3: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
              lineHeight: theme("lineHeight.normal"),
              marginTop: "0",
              marginBottom: "0",
            },
            p: {
              fontSize: theme("fontSize.lg"),
              lineHeight: theme("lineHeight.relaxed"),
              marginTop: "0",
              marginBottom: "0",
              color: theme("colors.darkGrey"),
            },
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
            a: {
              fontSize: theme("fontSize.lg"),
              lineHeight: theme("lineHeight.relaxed"),
              marginTop: "0",
              marginBottom: "0",
              color: theme("colors.white"),
              decorate: theme("textDecoration.underline"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
