# Portfolio Website - Next.js Project

## Overview
This is a personal portfolio website built with Next.js, featuring internationalization (i18n) support for English and Spanish, animations, and a responsive design. The project showcases experience, skills, projects, and contact information.

## Project Architecture
- **Framework**: Next.js 12.2.5 (Pages Router)
- **Language**: JavaScript (React 18.2.0)
- **Styling**: CSS Modules + Bootstrap 5.2.0
- **Internationalization**: i18next and react-i18next
- **Animations**: anime.js and Swiper
- **Icons**: react-icons

## Project Structure
```
├── components/         # React components (About, Contact, Experience, etc.)
├── helpers/           # Utility functions and data
│   └── Data/          # Localized content (en/es)
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   ├── _app.js        # Custom App component
│   └── index.js       # Home page
├── public/            # Static assets (images, PDFs, favicons)
├── styles/            # CSS modules
├── Translations/      # i18n configuration and translations
└── assets/            # Fonts, icons, images
```

## Development Setup
The project has been configured for the Replit environment:

1. **Port Configuration**: Dev server runs on port 5000 (0.0.0.0:5000)
2. **Cache Headers**: No-cache headers configured to prevent stale content
3. **Webpack**: File watching configured for Replit environment

## Running the Project
- **Development**: The workflow "Next.js Dev Server" automatically runs `npm run dev`
- **Build**: `npm run build`
- **Production**: `npm start`

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npm start`
- Deployment creates optimized production build

## Features
- Multi-language support (English/Spanish)
- Responsive design with Bootstrap
- Custom animations
- Project portfolio showcase
- Contact form
- Downloadable resume/CV
- Social media links

## Recent Changes (November 23, 2025)
- Imported from GitHub repository
- Configured Next.js for Replit environment (port 5000, 0.0.0.0 binding)
- Added cache-control headers to prevent caching issues
- Set up development workflow
- Configured deployment settings
- Installed all npm dependencies
- **Fixed critical bugs**:
  - Fixed infinite loop in loading screen (pages/index.js useEffect dependency)
  - Fixed React hooks errors in i18n initialization (Translations/LanguageConfig.js)
  - Website now properly transitions from loading screen to content after 2.5 seconds
  - English (en-US) displays correctly as the default language

## User Preferences
Not yet established.

## Notes
- The project uses the Next.js Pages Router (not App Router)
- i18n is configured at the Next.js level with en-US and es locales
- Custom fonts are included in the assets folder
