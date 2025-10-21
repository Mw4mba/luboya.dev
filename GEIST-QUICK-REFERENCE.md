# Geist Design System - Quick Reference

## 🎨 Color Tokens (Copy & Paste Ready)

### Light Mode
```css
bg-white                /* #ffffff - Page background */
text-black             /* #000000 - Primary text */
text-gray-600          /* #525252 - Secondary text */
text-gray-400          /* #a3a3a3 - Tertiary text */
border-gray-200        /* #e5e5e5 - Borders */
bg-gray-50             /* #fafafa - Subtle bg */
bg-gray-100            /* #f5f5f5 - Hover bg */
```

### Dark Mode
```css
bg-black               /* #000000 - Page background */
text-white             /* #ffffff - Primary text */
text-gray-400          /* #525252 - Secondary text */
text-gray-600          /* #a3a3a3 - Tertiary text */
border-gray-800        /* #262626 - Borders */
bg-gray-950            /* #0a0a0a - Subtle bg */
bg-gray-900            /* #171717 - Hover bg */
```

## 🧩 Component Templates

### Button - Primary
```tsx
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200">
  Button Text
</a>
```

### Button - Secondary
```tsx
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-black rounded-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200">
  Button Text
</a>
```

### Card
```tsx
<div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
    Card Title
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Card description text goes here
  </p>
</div>
```

### Badge
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
    Badge Text
  </span>
</div>
```

### Badge with Pulse
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
  </span>
  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
    Status Text
  </span>
</div>
```

## 📝 Typography Scale

```tsx
/* Hero Heading */
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">

/* Page Heading */
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">

/* Section Heading */
<h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-50">

/* Card Heading */
<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">

/* Body Text */
<p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">

/* Small Text */
<p className="text-sm text-gray-600 dark:text-gray-400">

/* Tiny Text */
<span className="text-xs text-gray-500 dark:text-gray-400">
```

## 🎭 Common Patterns

### Grid - 3 Columns
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Grid - 2 Columns
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Items */}
</div>
```

### Centered Container
```tsx
<div className="container mx-auto px-6 py-20">
  <div className="flex flex-col items-center justify-center min-h-screen">
    {/* Content */}
  </div>
</div>
```

### Background with Grid
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
</div>
```

### Accent Glow
```tsx
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
```

## 🎨 Hover States

```tsx
/* Card Hover */
hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg

/* Button Hover */
hover:bg-gray-800 dark:hover:bg-gray-200

/* Link Hover */
hover:text-black dark:hover:text-white

/* Scale Hover */
hover:scale-105 transition-transform duration-200

/* Opacity Hover */
hover:opacity-70 transition-opacity duration-200
```

## 🔄 Transitions

```tsx
/* All Properties */
transition-all duration-200

/* Specific Properties */
transition-colors duration-300
transition-transform duration-200
transition-opacity duration-200
```

## 📐 Spacing Scale

```tsx
/* Padding */
p-3   /* 12px */
p-6   /* 24px */
p-8   /* 32px */

/* Margin */
mb-6  /* 24px */
mb-12 /* 48px */
mb-16 /* 64px */
mb-24 /* 96px */

/* Gap */
gap-2  /* 8px */
gap-4  /* 16px */
gap-6  /* 24px */
gap-8  /* 32px */
```

## 🎯 Border Radius

```tsx
rounded-full  /* Pills, buttons */
rounded-2xl   /* Cards (16px) */
rounded-xl    /* Small cards (12px) */
rounded-lg    /* Minimal rounding (8px) */
```

## 💫 Animations

```tsx
/* Fade In (in globals.css) */
animate-fade-in           /* Base */
animate-fade-in-delay     /* +200ms */
animate-fade-in-delay-2   /* +400ms */

/* Pulse */
animate-ping              /* Expanding circle */
animate-pulse             /* Opacity pulse */
```

## 🌐 Responsive Breakpoints

```tsx
/* Mobile First */
<div className="text-sm sm:text-base md:text-lg">

/* Breakpoints */
sm:  /* 640px */
md:  /* 768px */
lg:  /* 1024px */
xl:  /* 1280px */
2xl: /* 1536px */
```

## 🎨 Max Widths

```tsx
max-w-2xl   /* 672px - Text content */
max-w-3xl   /* 768px - Navbar */
max-w-4xl   /* 896px - Cards */
max-w-5xl   /* 1024px - Sections */
max-w-6xl   /* 1152px - Page content */
```

## 🔍 Common Class Combinations

### Page Wrapper
```tsx
className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300"
```

### Content Container
```tsx
className="relative z-10 container mx-auto px-6 py-20"
```

### Icon Container
```tsx
className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center"
```

### Glass Effect
```tsx
className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800"
```

## 🎯 Do's and Don'ts

### ✅ Do
- Use 1px borders
- Keep shadows subtle
- Use semibold for headings
- Add generous whitespace
- Use rounded-2xl for cards
- Include dark mode classes
- Add smooth transitions

### ❌ Don't
- Use thick borders (>2px)
- Use heavy/colored shadows
- Use bold font weight
- Crowd elements together
- Use sharp corners
- Forget dark mode styles
- Use instant changes

## 📱 Mobile-Specific Classes

```tsx
/* Font Sizes */
text-xs sm:text-sm      /* 12px → 14px */
text-sm sm:text-base    /* 14px → 16px */
text-base sm:text-lg    /* 16px → 18px */

/* Spacing */
px-4 sm:px-6            /* 16px → 24px */
py-3 sm:py-4            /* 12px → 16px */
gap-2 sm:gap-4          /* 8px → 16px */

/* Layout */
flex-col sm:flex-row    /* Stack → Horizontal */
grid-cols-1 md:grid-cols-3  /* 1 col → 3 cols */
```

## 🎨 Color Combinations

### High Contrast (AA)
```tsx
text-gray-900 dark:text-gray-50   /* Primary */
text-gray-600 dark:text-gray-400  /* Secondary */
text-gray-500 dark:text-gray-500  /* Tertiary */
```

### Borders
```tsx
border-gray-200 dark:border-gray-800      /* Default */
border-gray-300 dark:border-gray-700      /* Hover */
```

### Backgrounds
```tsx
bg-white dark:bg-black                    /* Page */
bg-gray-50 dark:bg-gray-950              /* Section */
bg-gray-100 dark:bg-gray-900             /* Hover */
```

---

**Quick Reference Version**: 1.0  
**For**: Vercel Geist Design System  
**Updated**: October 2025
