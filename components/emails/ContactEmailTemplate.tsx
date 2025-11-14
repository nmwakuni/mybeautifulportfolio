import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmailTemplate({
  name,
  email,
  subject,
  message,
}: ContactEmailTemplateProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body style={main}>
        <div style={container}>
          {/* Header */}
          <div style={header}>
            <h1 style={headerTitle}>New Contact Form Submission</h1>
            <div style={gradientBar} />
          </div>

          {/* Content */}
          <div style={content}>
            <p style={intro}>
              You have received a new message from your portfolio website.
            </p>

            {/* Sender Info */}
            <div style={infoSection}>
              <h2 style={sectionTitle}>Contact Information</h2>
              <div style={infoRow}>
                <span style={label}>Name:</span>
                <span style={value}>{name}</span>
              </div>
              <div style={infoRow}>
                <span style={label}>Email:</span>
                <a href={`mailto:${email}`} style={emailLink}>
                  {email}
                </a>
              </div>
              <div style={infoRow}>
                <span style={label}>Subject:</span>
                <span style={value}>{subject}</span>
              </div>
            </div>

            {/* Message */}
            <div style={messageSection}>
              <h2 style={sectionTitle}>Message</h2>
              <div style={messageBox}>{message}</div>
            </div>

            {/* Reply Button */}
            <div style={buttonContainer}>
              <a href={`mailto:${email}?subject=Re: ${subject}`} style={button}>
                Reply to {name}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div style={footer}>
            <p style={footerText}>
              This email was sent from your portfolio contact form
            </p>
            <p style={footerText}>
              Portfolio · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  marginTop: '40px',
  marginBottom: '40px',
  maxWidth: '600px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  padding: '32px 40px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
};

const headerTitle = {
  margin: '0',
  fontSize: '28px',
  fontWeight: '700',
  color: '#0a0a0a',
  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const gradientBar = {
  height: '4px',
  background: 'linear-gradient(to right, #6366f1, #8b5cf6, #06b6d4)',
  marginTop: '16px',
  borderRadius: '2px',
};

const content = {
  padding: '32px 40px',
};

const intro = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#374151',
  marginTop: '0',
  marginBottom: '24px',
};

const infoSection = {
  backgroundColor: '#f9fafb',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
  border: '1px solid #e5e7eb',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0a0a0a',
  marginTop: '0',
  marginBottom: '16px',
};

const infoRow = {
  display: 'flex',
  marginBottom: '12px',
  fontSize: '14px',
  lineHeight: '20px',
};

const label = {
  fontWeight: '600',
  color: '#6b7280',
  minWidth: '80px',
};

const value = {
  color: '#0a0a0a',
};

const emailLink = {
  color: '#6366f1',
  textDecoration: 'none',
  fontWeight: '500',
};

const messageSection = {
  marginBottom: '32px',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  padding: '20px',
  borderRadius: '8px',
  fontSize: '15px',
  lineHeight: '24px',
  color: '#374151',
  whiteSpace: 'pre-wrap',
  border: '1px solid #e5e7eb',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const button = {
  backgroundColor: '#6366f1',
  color: '#ffffff',
  padding: '12px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '15px',
  display: 'inline-block',
};

const footer = {
  padding: '24px 40px',
  borderTop: '1px solid #e5e7eb',
  textAlign: 'center' as const,
};

const footerText = {
  margin: '4px 0',
  fontSize: '12px',
  color: '#6b7280',
};
