# Foody Landing Page

A modern landing page for the Foody mobile application built with Next.js.

## About Foody

Foody is an AI-powered nutrition tracking app that helps users track their calorie intake by simply taking photos of their meals. Using Google's Gemini AI, it automatically analyzes food images and provides accurate nutritional information.

## Features

- 🏠 Modern landing page with hero section
- 📄 Privacy Policy page
- ⚖️ Terms of Service page
- 📱 Responsive design for all devices
- 🎨 Sleek dark theme with accent colors

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## Deployment

This site is configured for deployment to GitHub Pages. The GitHub Actions workflow will automatically build and deploy the site when you push to the main branch.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   └── terms/
│       └── page.tsx        # Terms of service page
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS-in-JS** - Scoped styling with styled-jsx

## License

All rights reserved - Foody 2025
