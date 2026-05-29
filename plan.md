# Anime Subscription App Implementation Plan

Build a responsive frontend-only anime streaming application with a subscription-based paywall simulation.

## Scope Summary
- **Anime Catalog**: A browsing interface for anime series/movies.
- **Subscription Tiers**: A landing page showcasing different plans (Basic, Premium, Ultra).
- **Video Player**: A simulated watchable experience for anime content.
- **Mock Authentication**: Frontend-only "Login/Sign-up" to manage user state.
- **Mock Payment**: A simulated checkout flow for subscriptions.
- **Persistence**: Using `localStorage` to track subscription status and user preferences.

## Non-Goals
- Real backend integration (No Supabase, No Postgres).
- Real payment processing (No Stripe, No PayPal).
- Actual hosting of copyrighted video files (will use placeholders/embeds).

## Affected Areas
- **Frontend (React)**: All UI components, routing, and state management.
- **Data Layer**: Mock JSON data for anime content and subscription plans.
- **State Management**: React Context or local state + `localStorage`.

## Phases & Deliverables

### Phase 1: Foundation & Mock Data
- Define the data structure for anime (title, description, thumbnail, videoUrl, isPremium).
- Set up React Router for navigation (`/`, `/browse`, `/watch/:id`, `/subscribe`, `/login`).
- **Owner**: `frontend_engineer`

### Phase 2: UI Components (Shadcn/UI)
- Hero section for the landing page.
- Anime card and grid components.
- Navigation bar with user status.
- Subscription plan cards.
- **Owner**: `frontend_engineer`

### Phase 3: Subscription & Auth Logic (Mock)
- Implement a `useAuth` hook and Context to manage user state.
- Create a mock checkout flow that updates user status to "subscribed" in `localStorage`.
- Implement protected routes for the `/watch` page based on subscription level.
- **Owner**: `frontend_engineer`

### Phase 4: Anime Browsing & Video Player
- Build the `/browse` page with filtering (Genre, Popularity).
- Build the `/watch/:id` page featuring a video player (using `video-react` or standard HTML5 video).
- Add "Premium" badges to content requiring subscription.
- **Owner**: `frontend_engineer`

### Phase 5: Polishing & Fixes
- Add animations/transitions.
- Ensure responsive design for mobile viewing.
- Minor text and CSS refinements.
- **Owner**: `quick_fix_engineer`

## Technical Assumptions
- We will use `lucide-react` for icons.
- We will use `localStorage` to persist "Subscription" status so the app feels real across reloads.
- Video content will be sourced from public domain placeholders or open-source animations (e.g., Big Buck Bunny) for demonstration.

## Open Questions
- Should we include a "Watchlist" feature? (Plan: Yes, using `localStorage`).
- Should we simulate different video qualities for different tiers? (Plan: UI-only indication).
