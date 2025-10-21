# Visual Component Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER WINDOW                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                    PAGE CONTENT                      │  │
│  │                                                       │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │         Background Animation Layer            │  │  │
│  │  │  • Animated blobs (purple/blue/pink)          │  │  │
│  │  │  • Grid pattern overlay                       │  │  │
│  │  │  • Gradient backgrounds                       │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │           Content Layer (z-10)                │  │  │
│  │  │                                               │  │  │
│  │  │         ┌─────────────────────┐               │  │  │
│  │  │         │   Page Heading      │               │  │  │
│  │  │         │   "Welcome to..."   │               │  │  │
│  │  │         └─────────────────────┘               │  │  │
│  │  │                                               │  │  │
│  │  │         ┌─────────────────────┐               │  │  │
│  │  │         │   Description       │               │  │  │
│  │  │         └─────────────────────┘               │  │  │
│  │  │                                               │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │                      ...                              │  │
│  │                      ...                              │  │
│  │                                                       │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │      FLOATING NAVBAR (z-50) - Bottom         │  │  │
│  │  │                                               │  │  │
│  │  │  ┌─────────────────────────────────────────┐ │  │  │
│  │  │  │  SLIDE-OUT MENU (when open)             │ │  │  │
│  │  │  │  ┌──────────────────────────────────┐   │ │  │  │
│  │  │  │  │ • Home • Offering • Showcase •   │   │ │  │  │
│  │  │  │  │     • Testimonials •             │   │ │  │  │
│  │  │  │  └──────────────────────────────────┘   │ │  │  │
│  │  │  └─────────────────────────────────────────┘ │  │  │
│  │  │                                               │  │  │
│  │  │  ┌─────────────────────────────────────────┐ │  │  │
│  │  │  │   MAIN BAR (always visible)             │ │  │  │
│  │  │  │                                         │ │  │  │
│  │  │  │   ┌──────────┐    ┌──────────┐        │ │  │  │
│  │  │  │   │  Luboya  │    │    ☰     │        │ │  │  │
│  │  │  │   │  (Logo)  │    │ (Menu)   │        │ │  │  │
│  │  │  │   └──────────┘    └──────────┘        │ │  │  │
│  │  │  │                                         │ │  │  │
│  │  │  │   [Glass Effect: blurred background]   │ │  │  │
│  │  │  └─────────────────────────────────────────┘ │  │  │
│  │  │                                               │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │                     24px margin                      │  │
│  └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Interaction Flow

```
User Action           │  Navbar State
──────────────────────┼─────────────────────────────────
                      │
Page Load            │  ┌─────────────────┐
                      │  │ [Luboya] [☰]   │
                      │  └─────────────────┘
                      │  Menu: CLOSED
                      │
                      │
Click Hamburger (☰)  │  ┌─────────────────────────┐
                      │  │ [Home] [Offering]      │
                      │  │ [Showcase] [Testimonials]│
                      │  └─────────────────────────┘
                      │  ┌─────────────────┐
                      │  │ [Luboya] [✕]   │
                      │  └─────────────────┘
                      │  Menu: OPEN
                      │  Overlay: VISIBLE (mobile)
                      │
                      │
Click Link           │  Navigate to page
                      │  Menu: AUTO-CLOSES
                      │  Active link: HIGHLIGHTED
                      │
                      │
Click Overlay        │  ┌─────────────────┐
(mobile only)        │  │ [Luboya] [☰]   │
                      │  └─────────────────┘
                      │  Menu: CLOSED
                      │
```

## Mobile vs Desktop Layout

### Mobile (< 640px)
```
┌─────────────────┐
│   [Luboya] [☰] │  ← Compact bar
└─────────────────┘

When menu opens:
┌─────────────────┐
│      Home       │  ← Vertical
│    Offering     │     stack
│    Showcase     │
│  Testimonials   │
└─────────────────┘
┌─────────────────┐
│   [Luboya] [✕] │
└─────────────────┘
```

### Desktop (≥ 640px)
```
┌────────────────────────────────────────────┐
│  [Home] [Offering] [Showcase] [Testimonials] │  ← Horizontal
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│          [Luboya] [☰]                      │
└────────────────────────────────────────────┘
```

## Animation Timing

```
Action                Time    Easing
─────────────────────┼────────┼──────────────
Menu Slide Out       │ 300ms  │ ease-in-out
Menu Slide In        │ 300ms  │ ease-in-out
Hamburger → X        │ 300ms  │ ease-in-out
Overlay Fade         │ 300ms  │ ease-in-out
Link Hover           │ 200ms  │ ease-in-out
Active Highlight     │ 200ms  │ ease-in-out
Page Content Fade    │ 1000ms │ ease-out
Blob Animation       │ 7000ms │ infinite
```

## Z-Index Layers

```
Layer               z-index    Purpose
───────────────────┼──────────┼────────────────────────
Background         │    0     │ Animated gradients
Content            │   10     │ Page text/elements
Mobile Overlay     │   40     │ Semi-transparent backdrop
Navbar             │   50     │ Always on top
```

## Color Palette by Page

```
Home Page:
  └─ Purple (#a855f7) + Blue (#3b82f6) + Pink (#ec4899)

Offering Page:
  └─ Indigo (#6366f1) + Cyan (#06b6d4) + Blue (#3b82f6)

Showcase Page:
  └─ Violet (#8b5cf6) + Fuchsia (#d946ef) + Purple (#a855f7)

Testimonials Page:
  └─ Emerald (#10b981) + Teal (#14b8a6) + Green (#22c55e)

Navbar:
  └─ Gradient: Blue-400 (#60a5fa) → Purple-600 (#9333ea)
```
