# Resend Email Integration Setup Guide

## Overview
This guide explains how to set up Resend for sending contact form emails from your Luboya.dev website.

## Prerequisites
- A Resend account (free tier available)
- Access to your project's `.env.local` file

## Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" or "Get Started"
3. Create your account using email or GitHub

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the left sidebar
3. Click **"Create API Key"**
4. Give it a name (e.g., "Luboya Contact Form")
5. Select permissions: **"Sending access"**
6. Click **"Add"**
7. **Copy the API key** (you won't be able to see it again!)

## Step 3: Configure Environment Variables

1. Open your project's `.env.local` file
2. Update the following variables:

```bash
# Your Resend API key from Step 2
RESEND_API_KEY=re_your_actual_key_here

# Email address where you want to receive contact form submissions
CONTACT_EMAIL=your-email@example.com
```

## Step 4: Update Email Sender (Production Only)

For **production environments**, you need to verify your domain:

### Verify Your Domain

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `luboya.dev`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually a few minutes)

### Update API Route

Once verified, update `src/app/api/contact/route.ts`:

```typescript
// Change this line:
from: 'Luboya Contact Form <onboarding@resend.dev>',

// To this (using your verified domain):
from: 'Luboya Contact Form <contact@luboya.dev>',
```

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out and submit the contact form

4. Check your email inbox (specified in `CONTACT_EMAIL`)

## Email Template Customization

### HTML Email Content

The email template is located in `src/app/api/contact/route.ts`. You can customize:

- **Colors**: Change the gradient, borders, badges
- **Logo**: Add your company logo in the header
- **Footer**: Update branding and links
- **Sections**: Add or remove information sections

### Example Customizations

```typescript
// Add your logo
const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>...</head>
    <body>
      <div class="header">
        <img src="https://yourdomain.com/logo.png" alt="Logo" style="width: 120px; margin-bottom: 20px;" />
        <h1>New Contact Form Submission</h1>
      </div>
      ...
    </body>
  </html>
`;
```

## Resend Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**
- Perfect for contact forms and small websites

For higher volumes, check [Resend Pricing](https://resend.com/pricing)

## Security Best Practices

### 1. Never Commit API Keys
- Keep `.env.local` in your `.gitignore`
- Never share your API key publicly
- Rotate keys if compromised

### 2. Rate Limiting
Consider adding rate limiting to prevent abuse:

```typescript
// In your API route
const RATE_LIMIT = 5; // 5 submissions per hour per IP
```

### 3. Spam Protection
Add reCAPTCHA or similar:
- Google reCAPTCHA v3
- Cloudflare Turnstile
- hCaptcha

### 4. Input Validation
The form already validates required fields, but consider:
- Email format validation
- Phone number validation
- XSS protection (sanitize inputs)

## Troubleshooting

### Email Not Sending

1. **Check API Key**: Verify it's correct in `.env.local`
2. **Check Console**: Look for errors in browser/server console
3. **Verify Domain**: If using custom domain, ensure DNS records are set
4. **Rate Limits**: Check if you've exceeded free tier limits

### Email Goes to Spam

1. **Verify Domain**: Use a verified domain instead of `onboarding@resend.dev`
2. **SPF/DKIM**: Ensure DNS records are properly configured
3. **Content**: Avoid spam trigger words
4. **Reputation**: New domains may have deliverability issues initially

### Common Errors

#### "API key is invalid"
- Double-check your `RESEND_API_KEY` in `.env.local`
- Ensure there are no extra spaces
- Try generating a new API key

#### "Domain not verified"
- You're using a custom `from` address without verifying the domain
- Either use `onboarding@resend.dev` for testing
- Or complete domain verification in Resend dashboard

#### "Rate limit exceeded"
- You've hit the free tier limit (100/day or 3,000/month)
- Wait for the limit to reset
- Or upgrade your Resend plan

## Production Deployment

### Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - `RESEND_API_KEY`: Your API key
   - `CONTACT_EMAIL`: Your email address
4. Redeploy your application

### Environment Variables on Other Platforms

**Netlify:**
```
Site settings → Build & deploy → Environment → Environment variables
```

**Railway:**
```
Project → Variables → Add Variable
```

**Render:**
```
Dashboard → Environment → Environment Variables
```

## Additional Features

### Auto-Reply Email

Send a confirmation email to the user:

```typescript
// After sending the main email, send auto-reply
await resend.emails.send({
  from: 'Luboya Team <contact@luboya.dev>',
  to: [email],
  subject: 'Thanks for reaching out!',
  html: `
    <h1>We received your message!</h1>
    <p>Hi ${firstName},</p>
    <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
  `,
});
```

### Attach Files

```typescript
await resend.emails.send({
  from: '...',
  to: ['...'],
  subject: '...',
  html: '...',
  attachments: [
    {
      filename: 'brochure.pdf',
      path: './public/brochure.pdf',
    },
  ],
});
```

### Email Tracking

Resend provides analytics:
- Open rates
- Click tracking
- Delivery status

Access via Resend dashboard → **Emails** → Select email

## Support

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Resend Discord**: [Join Community](https://resend.com/discord)
- **Status Page**: [status.resend.com](https://status.resend.com)

## Next Steps

1. ✅ Set up Resend account
2. ✅ Add API key to `.env.local`
3. ✅ Test contact form submission
4. 🔲 Verify custom domain (for production)
5. 🔲 Customize email template
6. 🔲 Add spam protection
7. 🔲 Set up auto-reply emails
8. 🔲 Monitor email analytics

---

**Note**: This integration is production-ready. The free tier is sufficient for most contact forms. Upgrade to a paid plan only if you need higher volume or additional features.
