# Moderniza.pt - Digital Solutions Platform

## Overview

Moderniza.pt is a full-stack web application built for a Portuguese digital solutions company. The platform showcases the company's services including web development, AI chatbots, workflow automation, and process automation. It features a modern dark-themed design with a Portuguese language interface and includes a contact form that integrates with external webhooks for lead management.

## System Architecture

The application follows a monorepo structure with a clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript, using Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Animation**: Framer Motion for smooth animations and transitions
- **Theme**: Custom dark theme with blue and neon green accent colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Form Handling**: React Hook Form with Zod schema validation

### Backend Architecture
- **API Layer**: RESTful Express.js server with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage**: In-memory storage implementation with interface for easy migration to database
- **Middleware**: Custom logging, error handling, and request processing
- **Development**: Vite middleware integration for seamless development experience

### Database Schema
Current schema includes:
- **Users**: Basic user authentication structure
- **Contact Submissions**: Lead capture from contact forms with fields for name, email, phone, company, service type, and message

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js server handles requests with proper validation
3. **Data Persistence**: Drizzle ORM manages database operations
4. **External Integration**: Contact form submissions are sent to n8n webhook for automation
5. **Response Handling**: Server responses are cached and managed by TanStack Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form management
- **zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type safety and better development experience
- **tsx**: TypeScript execution for development

## Deployment Strategy

The application is configured for deployment on Replit with autoscaling capabilities:

- **Build Process**: Vite builds the client, esbuild bundles the server
- **Production Server**: Node.js serves the built application
- **Database**: PostgreSQL configured through environment variables
- **Port Configuration**: Server runs on port 5000, exposed as port 80
- **Environment**: Supports both development and production modes

## Changelog

- June 25, 2025. Initial setup
- June 25, 2025. Major feature update:
  - Added complete multilingual support (Portuguese, English, Spanish, French)
  - Implemented full light/dark mode theming with toggle
  - Integrated HubSpot Forms API for lead management
  - Added customer reviews carousel section
  - Updated contact details (Coimbra address, new phone number)
  - Added sixth service card (Digital Consulting) to balance solutions grid
  - Fixed templates section scrollbar styling
  - Added functional Terms of Service and Privacy Policy modals
  - Updated Instagram link to working URL
  - Enhanced file upload functionality for contact form
  - Improved responsive design and accessibility
- June 25, 2025. Critical finalization update:
  - REMOVED multilingual support (Portuguese only as requested)
  - Fixed light mode contrast and visibility issues
  - Improved mobile responsiveness across all breakpoints (320px-768px)
  - Fixed AI section tabs with responsive flex-wrap layout
  - Removed LinkedIn from footer (Instagram and WhatsApp only)
  - Enhanced testimonials carousel (1 mobile, 2 tablet, 3 desktop)
  - Added proper shadows and depth for light mode cards/buttons
  - Fixed hero section mobile font scaling and overflow
  - All components now work without language dependencies
  - Complete Portuguese (PT-PT) content throughout

## User Preferences

Preferred communication style: Simple, everyday language.