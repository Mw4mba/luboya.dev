# Contact Form Documentation

## Overview
A comprehensive 4-step onboarding form that guides users through providing project details with a beautiful Geist-inspired design.

## Features

### 🎯 Multi-Step Form (4 Steps)
1. **Contact Information** - Basic user details
2. **Project Details** - Type, budget, timeline
3. **Requirements** - Description, goals, audience
4. **Additional Info** - Referral source, notes, newsletter

### ✨ Key Highlights

#### Progress Tracking
- Visual progress bar (0% → 25% → 50% → 75% → 100%)
- Step indicator badge (Step X of 4)
- Smooth transitions between steps

#### Form Validation
- Required fields marked with asterisk (*)
- HTML5 validation (email, required)
- Can't proceed to next step without required fields

#### Interactive Elements
- **Multi-select buttons**: Project types & goals
- **Radio-style buttons**: Urgency levels
- **Dropdown selects**: Budget & timeline
- **Text inputs**: Contact info
- **Textareas**: Long-form descriptions
- **Checkbox**: Newsletter opt-in

#### Visual Feedback
- Selected items show blue accent with checkmark
- Hover states on all interactive elements
- Focus rings on inputs (blue)
- Loading spinner on submit
- Success screen with animation

### 📱 Mobile Optimizations

1. **Responsive Grid**
   - 1 column on mobile
   - 2 columns on desktop (md: breakpoint)

2. **Touch-Friendly**
   - Large tap targets (py-3 minimum)
   - Clear spacing between elements
   - Smooth scrolling

3. **Form Navigation**
   - Back/Next buttons sticky at bottom
   - Progress bar always visible
   - Clear visual hierarchy

## Form Fields

### Step 1: Contact Information
```typescript
firstName: string (required)
lastName: string (required)
email: string (required, validated)
phone: string (optional, tel format)
company: string (optional)
role: string (optional)
```

### Step 2: Project Details
```typescript
projectType: string[] (multi-select, required)
  Options:
  - Website Development 🌐
  - Web Application ⚡
  - Mobile App 📱
  - E-commerce 🛍️
  - Branding & Design 🎨
  - Consulting 💡

budget: string (required)
  Options:
  - Less than $5,000
  - $5,000 - $10,000
  - $10,000 - $25,000
  - $25,000 - $50,000
  - $50,000 - $100,000
  - $100,000+

timeline: string (required)
  Options:
  - ASAP (< 1 month)
  - 1-3 months
  - 3-6 months
  - 6+ months
  - Flexible

urgency: string (required)
  Options: Low | Medium | High
```

### Step 3: Requirements
```typescript
description: string (required, textarea)
goals: string[] (multi-select, required)
  Options:
  - Increase Sales 💰
  - Brand Awareness 📢
  - User Engagement 👥
  - Process Automation 🤖
  - Modernization 🚀
  - Market Expansion 🌍

targetAudience: string (optional)
competitors: string (optional)
```

### Step 4: Additional Information
```typescript
referralSource: string (optional)
  Options:
  - Search Engine
  - Social Media
  - Referral
  - Advertising
  - Other

additionalNotes: string (optional, textarea)
newsletter: boolean (default: false)
```

## User Flow

```
Landing Page
    ↓
Click "Get in Touch" Button
    ↓
Contact Form (Step 1)
    ↓ [Fill & Next]
Step 2: Project Details
    ↓ [Fill & Next]
Step 3: Requirements
    ↓ [Fill & Next]
Step 4: Additional Info
    ↓ [Submit]
Loading State (2s)
    ↓
Success Screen
    ↓ [Two Options]
    ├─→ Back to Home
    └─→ Submit Another (Reset Form)
```

## State Management

```typescript
// Current step tracking
const [currentStep, setCurrentStep] = useState<FormStep>(1);

// Submission states
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

// Form data (all fields in single object)
const [formData, setFormData] = useState<FormData>({...});

// Update helpers
updateFormData(field, value)     // Single field update
toggleArrayValue(field, value)   // Multi-select toggle
```

## Animations

### Fade In
- Applied to each step's content
- Creates smooth transition feel
- Duration: 300ms

### Progress Bar
- Smooth width transition
- Duration: 500ms ease-out
- Fills left to right

### Button States
- Hover: border color change
- Active: scale transform
- Focus: ring appearance

### Success Screen
- Fade in animation
- Checkmark in green circle
- Pulse effect on icon background

## Styling

### Color Palette
- **Primary Action**: Blue gradient (blue-600 → blue-500)
- **Selected State**: Blue accent (blue-50 light, blue-950/20 dark)
- **Borders**: Gray-200 light, gray-800 dark
- **Background**: White/black with 80% opacity + backdrop blur

### Typography
- **Headings**: 2xl (Step titles), 4xl-5xl (Page title)
- **Labels**: sm, medium weight
- **Inputs**: Base size
- **Helper Text**: xs-sm

### Spacing
- **Section gaps**: space-y-6
- **Input padding**: px-4 py-3
- **Card padding**: p-8
- **Grid gaps**: gap-3 to gap-6

### Border Radius
- **Inputs/Selects**: rounded-xl (12px)
- **Buttons**: rounded-full (infinite)
- **Cards**: rounded-3xl (24px)

## Integration Points

### Backend Integration
Currently logs to console. To integrate:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) throw new Error('Submission failed');
    
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error:', error);
    // Show error message
  } finally {
    setIsSubmitting(false);
  }
};
```

### Email Notifications
Consider integrating with:
- SendGrid
- Mailgun
- AWS SES
- Resend
- Postmark

### CRM Integration
Potential integrations:
- HubSpot
- Salesforce
- Pipedrive
- Airtable
- Google Sheets (via API)

## Accessibility

### ARIA Labels
- All inputs have proper labels
- Form structure is semantic
- Focus management maintained

### Keyboard Navigation
- Tab order follows visual flow
- All interactive elements focusable
- Enter submits form on last step

### Screen Readers
- Proper heading hierarchy
- Label associations
- Status announcements (aria-live regions could be added)

## Best Practices

### Data Collection
✅ Only collect necessary information
✅ Optional fields clearly marked
✅ Provide context for why info is needed

### User Experience
✅ Show progress clearly
✅ Allow going back
✅ Autofocus first input (consider)
✅ Remember form data (could add localStorage)
✅ Clear error messages

### Performance
✅ Client-side validation
✅ Optimistic UI updates
✅ Minimal re-renders
✅ Smooth animations (GPU-accelerated)

## Future Enhancements

### Potential Additions
1. **Form Persistence**
   - Save to localStorage
   - Resume later functionality

2. **File Uploads**
   - Attach project briefs
   - Share inspiration images

3. **Calendar Integration**
   - Schedule discovery call
   - Book consultation directly

4. **AI Assistant**
   - Help fill out form
   - Suggest project types based on description

5. **Real-time Validation**
   - Email domain verification
   - Phone number formatting
   - Budget recommendations

6. **Analytics**
   - Track step completion rates
   - Identify drop-off points
   - A/B test different flows

## Navigation Integration

### Added to Homepage
```tsx
<a href="/contact" className="...">
  Get in Touch
  <svg>...</svg>
</a>
```

### Added to Navbar
```tsx
{ href: '/contact', label: 'Contact', icon: '📧' }
```

## Success Metrics

Track these KPIs:
- Form completion rate
- Average time to complete
- Most common project types
- Budget distribution
- Drop-off by step
- Newsletter opt-in rate

---

**Note**: This is a client-side only implementation. For production, add server-side validation, spam protection (reCAPTCHA), and proper data storage.
