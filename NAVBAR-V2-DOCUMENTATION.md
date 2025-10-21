# Updated Navbar Design Documentation

## 🎯 Design Overview

The navbar is now a **single unified component** with a clean, modern design:

```
┌────────────────────────────────────────────────────────────┐
│  [Logo]                                             [☰]    │
│                                                             │
│  When menu opens:                                          │
│  [Logo]  [Home] [Offering] [Showcase] [Testimonials]  [✕] │
└────────────────────────────────────────────────────────────┘
```

## 🎨 Key Features

### 1. **Unified Component Design**
- Single navbar container (not separate elements)
- Fixed width: `90%` of viewport, max `768px` (3xl)
- Positioned at bottom center: 24px from bottom
- Glass morphism effect with backdrop blur

### 2. **Logo Implementation**
- **Location**: Left side of navbar
- **Dark Mode**: Uses `/allogow.png` (white logo)
- **Light Mode**: Uses `/allogob.png` (black logo)
- **Size**: 40px × 40px (mobile), 48px × 48px (desktop)
- **Responsive**: Uses Next.js Image component for optimization
- **Hover Effect**: Scales to 105% on hover

### 3. **Links Animation**
- **Initial State**: Hidden (opacity: 0, translated right)
- **Open State**: Visible (slides in from right to left)
- **Animation**: 400ms ease-in-out transition
- **Stagger Effect**: Each link animates 50ms after the previous
- **Position**: Centered between logo and hamburger

### 4. **Hamburger Menu**
- **Location**: Right side of navbar
- **Size**: 40px × 40px (mobile), 48px × 48px (desktop)
- **Animation**: Transforms into X when open (300ms)
- **Hover Effect**: Background highlight on hover

## 📐 Layout Structure

```tsx
<nav> (fixed bottom-6, centered, 90% width)
  └─ <div> (glass container)
      └─ <div> (flex container)
          ├─ <Link> Logo (left, flex-shrink-0)
          ├─ <div> Links (center, absolute positioned)
          │   ├─ Home
          │   ├─ Offering
          │   ├─ Showcase
          │   └─ Testimonials
          └─ <button> Hamburger (right, flex-shrink-0)
```

## 🎭 Animation Flow

### Opening Sequence (Right to Left)
```
1. User clicks hamburger (☰)
2. Hamburger transforms to X (300ms)
3. Links container slides in from right (400ms)
4. Links appear with stagger effect:
   - Home: 0ms delay
   - Offering: 50ms delay
   - Showcase: 100ms delay
   - Testimonials: 150ms delay
5. Optional: Overlay fades in behind
```

### Closing Sequence
```
1. User clicks X or link or overlay
2. Links slide out to the right (400ms)
3. X transforms back to hamburger (300ms)
4. Overlay fades out
```

## 💻 Responsive Behavior

### Mobile (< 640px)
- Logo: 40px × 40px
- Hamburger: 40px × 40px
- Links: Smaller padding (px-3 py-1.5)
- Text: text-xs
- Navbar width: 90% of screen

### Desktop (≥ 640px)
- Logo: 48px × 48px
- Hamburger: 48px × 48px
- Links: Larger padding (px-4 py-2)
- Text: text-sm
- More spacing between elements

## 🌈 Visual States

### 1. Closed State
```
[Logo]                                               [☰]
  ↑                                                   ↑
  Left                                            Right
  
Width accommodates future expanded state
```

### 2. Open State
```
[Logo]    [Home] [Offering] [Showcase] [Testimonials]    [✕]
  ↑              ↑ Links slide in from right ↑            ↑
  Left                  Center                        Right
```

### 3. Active Link
- Background: Gradient (blue → purple)
- Text: White
- Shadow: Large glow effect
- Scale: 105% (slightly larger)

### 4. Hover States
- **Links**: Background tint + scale 105%
- **Logo**: Scale 105%
- **Hamburger**: Background tint

## 🎨 Color Scheme

### Light Mode
- Logo: `allogob.png` (black logo)
- Background: white/10 with backdrop blur
- Border: white/20
- Text: white/90

### Dark Mode (Default)
- Logo: `allogow.png` (white logo)
- Background: white/10 with backdrop blur
- Border: white/20
- Text: white/90

## 🔧 Technical Implementation

### Theme Detection
```typescript
useEffect(() => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setIsDarkMode(darkModeMediaQuery.matches);
  
  const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
  darkModeMediaQuery.addEventListener('change', handler);
  
  return () => darkModeMediaQuery.removeEventListener('change', handler);
}, []);
```

### Links Positioning
```tsx
// Absolute positioning between logo and hamburger
className="absolute left-14 sm:left-20 right-16 sm:right-20"
```

### Slide Animation
```tsx
// Transform from right when closed
className={`... ${
  isOpen
    ? 'opacity-100 translate-x-0 pointer-events-auto'
    : 'opacity-0 translate-x-full pointer-events-none'
}`}
```

### Stagger Effect
```tsx
style={{
  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
}}
```

## 📏 Spacing & Sizing

### Container
- Width: `90%` (mobile), max `768px` (desktop)
- Padding: `16px 24px` (mobile), `16px 24px` (desktop)
- Height: Auto (based on content)
- Border Radius: Full (pill shape)

### Logo
- Mobile: 40px × 40px
- Desktop: 48px × 48px
- Margin right: Auto (pushes to left)

### Links Area
- Position: Absolute (centered between logo & hamburger)
- Gap: 8px (mobile), 16px (desktop)
- Padding per link: 12px 16px

### Hamburger
- Mobile: 40px × 40px
- Desktop: 48px × 48px
- Margin left: Auto (pushes to right)

## ♿ Accessibility

✅ **ARIA Labels**
- `aria-label="Luboya Home"` on logo
- `aria-label="Toggle menu"` on hamburger
- `aria-expanded={isOpen}` for screen readers

✅ **Keyboard Navigation**
- All links are keyboard accessible
- Focus states visible
- Logical tab order

✅ **Semantic HTML**
- Proper `<nav>` element
- Proper `<button>` for hamburger
- Proper `<Link>` elements

## 🎯 User Interaction

### Click Targets
- Logo: 40-48px (good touch target)
- Hamburger: 40-48px (good touch target)
- Links: Full padding area clickable

### Feedback
- Immediate visual feedback on click
- Smooth animations (not jarring)
- Clear hover states
- Active page always visible when open

## 🚀 Performance

### Optimizations
- `next/image` for logo (automatic optimization)
- CSS transforms (GPU accelerated)
- `pointer-events-none` when closed (no interaction)
- Conditional overlay rendering
- Priority loading for logo

### Animation Performance
- Uses `transform` and `opacity` (GPU friendly)
- No layout shifts
- Smooth 60fps animations

## 📱 Mobile Considerations

### Touch Targets
- Minimum 40px × 40px (WCAG 2.5.5)
- Adequate spacing between elements
- No overlapping clickable areas

### Viewport Usage
- Doesn't cover critical content
- Fixed positioning (doesn't scroll away)
- Overlay is dismissible by tapping anywhere

### Performance
- Lightweight animations
- No janky scroll behavior
- Quick response to interactions

## 🎨 Customization Guide

### Change Width
```tsx
// Current: max-w-3xl (768px)
// Wider:
className="... max-w-4xl" // 896px
// Narrower:
className="... max-w-2xl" // 672px
```

### Change Animation Speed
```tsx
// Current: 400ms
// Faster:
className="... duration-300"
// Slower:
className="... duration-500"
```

### Change Stagger Timing
```tsx
// Current: 50ms per link
// Faster:
transitionDelay: isOpen ? `${index * 30}ms` : '0ms'
// Slower:
transitionDelay: isOpen ? `${index * 80}ms` : '0ms'
```

### Adjust Logo Size
```tsx
// Current: w-10 h-10 sm:w-12 sm:h-12
// Larger:
className="w-12 h-12 sm:w-14 sm:h-14"
```

## 🐛 Troubleshooting

### Logo Not Showing
- Check files exist: `/public/allogow.png` and `/public/allogob.png`
- Verify file names are exactly correct (case-sensitive)
- Check Image component has `fill` and parent has dimensions

### Links Not Sliding
- Verify `duration-400` class is in CSS
- Check `transition-all` is applied
- Ensure `translate-x-full` and `translate-x-0` are working

### Wrong Logo Showing
- Check theme detection in browser DevTools
- Test: `window.matchMedia('(prefers-color-scheme: dark)').matches`
- Verify useEffect is running

### Hamburger Not Transforming
- Check `isOpen` state is toggling
- Verify CSS transitions are applied
- Test in different browsers
