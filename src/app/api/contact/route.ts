import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      role,
      projectType,
      budget,
      timeline,
      urgency,
      description,
      goals,
      targetAudience,
      competitors,
      referralSource,
      additionalNotes,
      newsletter,
    } = body;

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
            .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
            .section h2 { margin-top: 0; font-size: 18px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .field-value { color: #1f2937; font-size: 15px; }
            .badge { display: inline-block; padding: 4px 12px; background: #dbeafe; color: #1e40af; border-radius: 12px; font-size: 13px; margin-right: 8px; margin-bottom: 8px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">You have a new project inquiry from ${firstName} ${lastName}</p>
            </div>
            
            <div class="content">
              <!-- Contact Information -->
              <div class="section">
                <h2>👤 Contact Information</h2>
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${firstName} ${lastName}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></div>
                </div>
                ` : ''}
                ${company ? `
                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${company}</div>
                </div>
                ` : ''}
                ${role ? `
                <div class="field">
                  <div class="field-label">Role</div>
                  <div class="field-value">${role}</div>
                </div>
                ` : ''}
              </div>

              <!-- Project Details -->
              <div class="section">
                <h2>💼 Project Details</h2>
                <div class="field">
                  <div class="field-label">Project Type(s)</div>
                  <div class="field-value">
                    ${projectType?.map((type: string) => `<span class="badge">${type}</span>`).join('') || 'Not specified'}
                  </div>
                </div>
                <div class="field">
                  <div class="field-label">Budget Range</div>
                  <div class="field-value">${budget || 'Not specified'}</div>
                </div>
                <div class="field">
                  <div class="field-label">Timeline</div>
                  <div class="field-value">${timeline || 'Not specified'}</div>
                </div>
                <div class="field">
                  <div class="field-label">Urgency Level</div>
                  <div class="field-value"><span class="badge">${urgency || 'Not specified'}</span></div>
                </div>
              </div>

              <!-- Requirements -->
              <div class="section">
                <h2>📋 Project Requirements</h2>
                ${description ? `
                <div class="field">
                  <div class="field-label">Project Description</div>
                  <div class="field-value" style="white-space: pre-wrap;">${description}</div>
                </div>
                ` : ''}
                ${goals?.length > 0 ? `
                <div class="field">
                  <div class="field-label">Main Goals</div>
                  <div class="field-value">
                    ${goals.map((goal: string) => `<span class="badge">${goal}</span>`).join('')}
                  </div>
                </div>
                ` : ''}
                ${targetAudience ? `
                <div class="field">
                  <div class="field-label">Target Audience</div>
                  <div class="field-value">${targetAudience}</div>
                </div>
                ` : ''}
                ${competitors ? `
                <div class="field">
                  <div class="field-label">Competitors/Similar Solutions</div>
                  <div class="field-value">${competitors}</div>
                </div>
                ` : ''}
              </div>

              <!-- Additional Information -->
              <div class="section">
                <h2>ℹ️ Additional Information</h2>
                ${referralSource ? `
                <div class="field">
                  <div class="field-label">How They Found Us</div>
                  <div class="field-value">${referralSource}</div>
                </div>
                ` : ''}
                ${additionalNotes ? `
                <div class="field">
                  <div class="field-label">Additional Notes</div>
                  <div class="field-value" style="white-space: pre-wrap;">${additionalNotes}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="field-label">Newsletter Subscription</div>
                  <div class="field-value">${newsletter ? '✅ Yes, subscribed' : '❌ No'}</div>
                </div>
              </div>

              <div class="footer">
                <p>This email was sent from your Luboya.dev contact form</p>
                <p style="margin-top: 10px;">Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Luboya Contact Form <onboarding@resend.dev>', // Change to your verified domain
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // Your email
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data: data 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
