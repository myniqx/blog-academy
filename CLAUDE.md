# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
yarn dev            # Start development server at localhost:3000
```

**Build & Production:**
```bash
yarn build          # Build for production
yarn start          # Start production server
yarn post-build     # Generate sitemap (runs automatically after build)
```

**Code Quality:**
```bash
yarn lint           # Run ESLint
yarn format         # Format code with Prettier
```

**Package Manager:** This project uses Yarn (v1.22.21+)

## Architecture Overview

This is a **Blog Academy** website for "Doruk Akademi" - a Turkish academic career assistance platform built with Next.js 14 App Router, TypeScript, and Chakra UI.

### Key Technologies
- **Next.js 14** with App Router and TypeScript
- **Chakra UI** with Emotion for styling and theming
- **Static Blog System** using JSON storage with markdown content
- **Email Integration** via Resend API for contact forms
- **SEO Optimization** with next-seo and automated sitemap generation

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with ChakraProvider
│   ├── api/               # API routes
│   │   ├── send-email/    # Contact form email endpoint
│   │   └── saveBlog/      # Blog management API
│   ├── blogs/             # Blog listing and dynamic [slug] routes
│   └── edit/              # Admin blog editing interface
├── components/            
│   ├── fixed/             # Layout components (Header, Footer, Drawer)
│   └── [features]/        # Feature-specific components
├── constants/             
│   ├── blogs/blogs.json   # Static blog content storage
│   ├── web.ts             # Site configuration
│   └── theme.ts           # Chakra UI theme customization
└── utils/                 # Utility functions
```

### Component Patterns
- **Layout Components:** Fixed header/footer in `/components/fixed/`
- **Feature Components:** Modular, reusable components with TypeScript props
- **Server/Client Separation:** Proper use of "use client" directive
- **Chakra UI Integration:** Custom theme with Poppins/Roboto fonts

### Blog System Architecture
- **Content Storage:** Static JSON file (`/constants/blogs/blogs.json`)
- **Content Structure:** Each blog has `title`, `slug`, `description`, `content` (markdown), `date`
- **Dynamic Routing:** `/blogs/[slug]` for individual blog posts
- **Admin Interface:** `/edit` page with markdown editor for content management
- **SEO Integration:** Automated sitemap generation includes all blog posts

### API Architecture
- **Email Service:** `/api/send-email` using Resend API with contact form validation
- **Blog Management:** `/api/saveBlog` for admin blog operations
- **Form Validation:** Phone validation for Turkish numbers (05XXXXXXXXX format)

### Styling & Theme
- **Custom Chakra Theme:** Extended with brand colors, custom fonts, and global styles
- **Typography:** Poppins for headings, Roboto for body text
- **Responsive Design:** Chakra UI responsive props throughout
- **External CSS:** Imports for slick-carousel and markdown editor

### Content Management
- **Static Generation:** Blogs are statically generated from JSON
- **Markdown Support:** Full markdown rendering with react-markdown
- **SEO Metadata:** Structured meta tags and Open Graph integration
- **Multilingual:** Primarily Turkish content for academic guidance

### Development Notes
- **Path Aliases:** `@/*` maps to `src/*`
- **TypeScript:** Strict mode enabled with comprehensive type definitions
- **Code Quality:** ESLint + Prettier with Next.js recommended configs
- **Performance:** Dynamic imports for heavy components like markdown editor

### Contact Form Implementation
- **Required Fields:** Name (3+ chars), Phone (Turkish format), Email (optional)
- **Validation:** Real-time validation with visual feedback (✓/❌ icons)
- **Phone Format:** Supports 05XXXXXXXXX, +90 5XX XXX XX XX patterns
- **Email Integration:** Uses Resend API with Nodemailer fallback