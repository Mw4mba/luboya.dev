# Quick Reference - Navbar Component

## Component Structure

```
Navbar
├── Expandable Menu (slides out on click)
│   ├── Home
│   ├── Offering
│   ├── Showcase
│   └── Testimonials
└── Main Bar (always visible)
    ├── Logo (Luboya)
    └── Hamburger Button
```

## Key Features

✅ **Floating Design**: Bottom-centered, 24px from bottom
✅ **Blurred Glass Effect**: backdrop-blur-lg with white/10 opacity
✅ **Slide Animation**: 300ms smooth transitions
✅ **Active State Highlighting**: Gradient background on current page
✅ **Mobile Optimized**: Overlay + vertical menu stack
✅ **Animated Hamburger**: Transforms into X when open

## Styling Classes

### Main Container
- `fixed bottom-6 left-1/2 -translate-x-1/2 z-50`

### Glass Effect
- `bg-white/10 backdrop-blur-lg border border-white/20`

### Menu States
- Open: `opacity-100 translate-y-0 pointer-events-auto`
- Closed: `opacity-0 translate-y-4 pointer-events-none`

### Active Link
- `bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg`

## File Locations

- Component: `src/components/Navbar.tsx`
- Styles: `src/app/globals.css`
- Pages: `src/app/[page]/page.tsx`

## Navigation Routes

| Route | Page | Color Theme |
|-------|------|-------------|
| `/` | Home | Purple/Blue |
| `/offering` | Offering | Indigo/Cyan |
| `/showcase` | Showcase | Violet/Fuchsia |
| `/testimonials` | Testimonials | Emerald/Teal |

## Customization Tips

### Change Navbar Position
```tsx
// Change from bottom to top
className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
```

### Adjust Blur Amount
```tsx
// Less blur
className="backdrop-blur-sm"

// More blur
className="backdrop-blur-2xl"
```

### Modify Animation Speed
```tsx
// Faster
className="transition-all duration-150"

// Slower
className="transition-all duration-500"
```

### Change Logo
```tsx
<Link href="/" className="text-xl font-bold ...">
  Your Logo
</Link>
```

## Mobile Breakpoints

- **sm**: 640px (small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (small laptops)
- **xl**: 1280px (desktops)

## Animation Classes

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-blob` | Organic movement | 7s |
| `animate-float` | Up/down floating | 3s |
| `animate-fade-in` | Fade in from below | 1s |
| `animate-scroll-up` | Vertical scrolling | 20s |

## Accessibility

- ✅ `aria-label="Toggle menu"` on hamburger
- ✅ `aria-expanded={isOpen}` for screen readers
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ Semantic HTML structure
