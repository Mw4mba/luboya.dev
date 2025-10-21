# Luboya.dev - Floating Navbar Implementation

## 🎯 Project Overview
A modern Next.js website with a floating navbar that provides an elegant, tech-inspired user experience across all devices.

## 📁 Directory Structure

```
luboya.dev/
├── public/
│   └── grid.svg                    # Background grid pattern
├── src/
│   ├── app/
│   │   ├── page.tsx                # Home page (purple/blue theme)
│   │   ├── offering/
│   │   │   └── page.tsx            # Offering page (indigo/cyan theme)
│   │   ├── showcase/
│   │   │   └── page.tsx            # Showcase page (violet/fuchsia theme)
│   │   ├── testimonials/
│   │   │   └── page.tsx            # Testimonials page (emerald/teal theme)
│   │   ├── layout.tsx
│   │   └── globals.css             # Global styles + animations
│   └── components/
│       └── Navbar.tsx              # Floating navbar component
```

## 🎨 Design Features

### Navbar Design
- **Floating Position**: Fixed at bottom center of screen with 24px margin
- **Blurred Background**: `backdrop-blur-lg` with `bg-white/10` for glass effect
- **Pill Shape**: Fully rounded corners using `rounded-full`
- **Slide-out Menu**: Links hidden within hamburger, slide out smoothly on click
- **Active State**: Current page highlighted with gradient background
- **Mobile Optimized**: 
  - Vertical menu stack on mobile
  - Semi-transparent overlay when menu is open
  - Touch-friendly button sizes

### Page Themes
Each page has a unique tech-inspired background:

1. **Home** (Purple/Blue)
   - Animated blob gradients
   - Grid pattern overlay
   - Welcome message with CTA buttons

2. **Offering** (Indigo/Cyan)
   - Binary code scrolling effect
   - Code/development theme
   - Perfect for showcasing services

3. **Showcase** (Violet/Fuchsia)
   - Floating particle animations
   - Gallery/display aesthetic
   - Ideal for portfolio items

4. **Testimonials** (Emerald/Teal)
   - Network connection lines
   - Social/communication theme
   - Great for client feedback

## 🔧 Technical Implementation

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hooks**: `useState` for menu state, `usePathname` for active link detection

### Navbar Component Features
```typescript
- Client-side rendering ('use client')
- Smooth animations (300ms transitions)
- Active link detection with gradient highlight
- Hamburger menu with animated icon
- Mobile overlay with backdrop blur
- Accessibility: aria-labels and aria-expanded
```

### Animations Included
- `animate-blob`: Organic floating blob movement (7s loop)
- `animate-float`: Particle floating effect (3s loop)
- `animate-fade-in`: Content entrance animations
- `animate-scroll-up`: Binary code scrolling (20s loop)

## 📱 Mobile Responsiveness

### Navbar Behavior
- **Mobile (<640px)**:
  - Vertical menu layout
  - Full-width overlay when open
  - Logo text "Luboya" visible
  - Larger touch targets

- **Desktop (≥640px)**:
  - Horizontal menu layout
  - No overlay needed
  - Compact design
  - Hover effects

### Content Layout
- Responsive font sizes: `text-5xl md:text-7xl`
- Flexible button layout: `flex-col sm:flex-row`
- Container padding adapts to screen size
- Animated backgrounds scale properly

## 🎨 Color Schemes

### Gradients Used
- **Primary**: Blue (400) → Purple (600)
- **Offering**: Cyan (400) → Indigo (600)
- **Showcase**: Fuchsia (400) → Violet (600)
- **Testimonials**: Teal (400) → Emerald (600)

### Background Effects
- Dark slate base (900)
- Colored accent blobs with blur
- Mix-blend-multiply for depth
- Opacity layers for subtlety

## 🚀 Usage

### Running the Project
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Navigation
- Click hamburger menu to reveal links
- Active page is highlighted with gradient
- Click anywhere on mobile overlay to close menu
- Smooth transitions between pages

## 📋 Component Props

### Navbar
- No props required
- Automatically detects current route
- Self-contained state management

### Page Templates
All pages follow consistent structure:
- Background animation layer
- Content container (z-10)
- Navbar component (z-50)

## 🎯 Future Enhancements
- Add content sections to each page
- Implement smooth scroll animations
- Add page transition effects
- Create reusable background components
- Add SEO metadata to each page
- Implement analytics tracking

## 📝 Notes
- All animations are performance-optimized
- No external animation libraries needed
- Fully responsive on all screen sizes
- Accessible keyboard navigation
- Glass morphism design trend
- Modern tech aesthetic throughout
