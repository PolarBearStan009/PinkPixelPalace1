# Kawaii Portfolio Application Guide

## Overview

This is a Y2K-inspired portfolio application featuring a visually playful, kawaii-themed design with React frontend and Express backend. The application displays a collection of projects in a nostalgic early 2000s web aesthetic, complete with sparkle effects, pixel art, and vibrant colors. The architecture follows a modern React/Express stack with Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application is built with a clear separation between client and server:

- **Frontend**: React application with TailwindCSS and Shadcn UI components
- **Backend**: Express server handling API routes and static file serving
- **Database**: Uses Drizzle ORM (PostgreSQL database expected but not yet configured)
- **Styling**: Heavy use of TailwindCSS with custom Y2K-inspired theme variables

The application follows a typical client-server architecture where:
1. The Express backend serves both API endpoints and the compiled React frontend
2. API requests from the frontend fetch project data from the backend
3. Database schema is defined but currently uses in-memory storage with plans for PostgreSQL integration

## Key Components

### Frontend

1. **React Components**:
   - Core page components: `Home`, `NotFound`
   - UI components: Various Shadcn UI components for interface elements
   - Y2K-themed components: `Cursor`, `GlitterBorder`, `Marquee`, `ProjectCard`
   - Interactive elements like `Secret` for easter eggs

2. **State Management**:
   - React Query for data fetching and state management
   - Local state for UI interactions and animations

3. **Routing**:
   - Uses Wouter for lightweight client-side routing

4. **Styling**:
   - TailwindCSS with custom configuration for Y2K aesthetic
   - Custom CSS variables for theme colors like hot-pink, cyber-blue, neon-green
   - Animation effects like sparkles, rainbow text, and floating elements

### Backend

1. **Express Server**:
   - API routes for data access
   - Serves static files for the frontend build
   - Development middleware for hot-reloading

2. **Storage**:
   - Currently uses in-memory storage implementation
   - Defined schema for PostgreSQL using Drizzle ORM
   - Schema includes `users` and `projects` tables

3. **Endpoints**:
   - `/api/projects` - Returns project data
   - User authentication endpoints defined but not fully implemented

## Data Flow

1. The application initializes with the Express server starting up.
2. When a user visits the site, the server serves the compiled React application.
3. The React application renders the Home page which makes a query to `/api/projects`.
4. The server processes this request and returns a list of demo portfolio projects.
5. The frontend displays these projects using the `ProjectCard` component.
6. Interactive elements (like the sparkle cursor trail) are purely client-side.
7. Easter eggs, such as the Konami code implementation, are triggered by specific user interactions.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with Shadcn UI components
- **Data Fetching**: @tanstack/react-query
- **Styling**: TailwindCSS, clsx for class composition
- **Component Libraries**: Radix UI primitive components
- **Routing**: Wouter for client-side routing

### Backend Dependencies
- **Server**: Express.js
- **Database ORM**: Drizzle ORM
- **Validation**: Zod for schema validation
- **Development**: Vite for development server and building

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Frontend: Built with Vite, outputs to `dist/public`
   - Backend: Built with esbuild, outputs to `dist/index.js`
   - Combined build command: `npm run build`

2. **Runtime Configuration**:
   - Development: `npm run dev` runs the server with tsx for TypeScript support
   - Production: `npm run start` runs the compiled JavaScript

3. **Environment Variables**:
   - `DATABASE_URL`: Expected for database connection (needs to be set)
   - `NODE_ENV`: Controls development vs production behavior

4. **Database Setup**:
   - The application expects PostgreSQL, and includes a module for Neon Serverless
   - Database schema migrations can be performed with `npm run db:push`

## Getting Started for Development

1. Ensure the `DATABASE_URL` environment variable is set to a valid PostgreSQL connection string
2. Run `npm run dev` to start the development server
3. The application will be available at the port specified in the Replit config (port 5000)

## Common Tasks

### Adding a New API Endpoint
1. Add the route to `server/routes.ts` in the `registerRoutes` function
2. Implement the endpoint logic, following the pattern of existing endpoints

### Adding a New Frontend Page
1. Create a new page component in `client/src/pages/`
2. Add the route to the router in `client/src/App.tsx`

### Adding Database Features
1. Update the schema in `shared/schema.ts` with new tables or columns
2. Run `npm run db:push` to apply the changes to the database
3. Update the storage interface in `server/storage.ts` with new methods for your tables

### Styling Components
1. Use the existing Y2K theme variables for consistent styling
2. Add any new CSS variables to `client/src/index.css` as needed
3. Use the `cn()` utility from `@/lib/utils` to compose class names