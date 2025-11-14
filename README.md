# Beautiful Portfolio Website

A stunning portfolio website built with Next.js, TypeScript, and Framer Motion, inspired by zeroheight.com's design aesthetic.

## Features

- **Smooth Animations**: Buttery-smooth scroll animations and micro-interactions using Framer Motion
- **Hero Section**: Eye-catching hero with animated gradients, floating shapes, and smooth entrance animations
- **Projects Showcase**: Beautiful project cards with hover effects and transitions
- **About Section**: Scroll-triggered animations highlighting skills and statistics
- **Blog**: Full blog system with listing page and article pages
- **Contact Form**: Validated contact form with real email sending via Resend
- **Email Integration**: Beautiful HTML email templates for contact form submissions
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI**: Clean, minimalist design with purple/blue gradient color scheme
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Custom Scrollbar**: Styled scrollbar matching the design system

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation
- **Resend** - Modern email API for contact form
- **Lucide React** - Beautiful, consistent icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

### Email Setup (Resend)

The contact form uses [Resend](https://resend.com) for sending emails. Follow these steps to set it up:

1. **Create a Resend account** at [resend.com](https://resend.com)

2. **Get your API key** from the [API Keys page](https://resend.com/api-keys)

3. **Configure environment variables**:
   - Copy `.env.example` to `.env.local`
   - Add your Resend API key
   - Set your contact email (where you want to receive messages)

```bash
# .env.local
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your@email.com
RESEND_FROM_EMAIL=Contact Form <onboarding@resend.dev>
```

4. **For production with custom domain** (optional):
   - Add and verify your domain in Resend
   - Update `RESEND_FROM_EMAIL` to use your domain:
   ```
   RESEND_FROM_EMAIL=Contact Form <contact@yourdomain.com>
   ```

5. **Test the form**:
   - Run `npm run dev`
   - Fill out the contact form
   - Check your email inbox

The contact form will now send beautifully formatted emails whenever someone submits the form!

## Customization Guide

### 1. Personal Information

Update your personal details throughout the site:

- **Hero Section**: `components/sections/Hero.tsx`
  - Change the tagline, description, and social links
- **Footer**: `components/ui/Footer.tsx`
  - Update your name and social media links
- **Metadata**: `app/layout.tsx`
  - Update the site title and description for SEO

### 2. Projects

Add your projects in `components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tags: ['React', 'Next.js'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
  },
  // Add more projects...
];
```

### 3. About Section

Customize your skills and stats in `components/sections/About.tsx`:

- Update the `skills` array with your expertise
- Modify the statistics to reflect your experience

### 4. Blog Posts

Add blog posts in `components/sections/Blog.tsx` and `app/blog/page.tsx`:

```typescript
const blogPosts = [
  {
    title: 'Your Article Title',
    excerpt: 'Article excerpt...',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Development',
    gradient: 'from-blue-500 to-cyan-500',
    slug: 'your-article-slug',
  },
];
```

For full blog posts, create MDX files or update `app/blog/[slug]/page.tsx`.

### 5. Color Scheme

Customize colors in `app/globals.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
}
```

### 6. Contact Form & Email

The contact form is already set up with Resend! Just configure your environment variables (see Email Setup section above). You can customize:

- **Email template**: `components/emails/ContactEmailTemplate.tsx`
  - Modify the design and layout of emails you receive
- **Email recipient**: Set `CONTACT_EMAIL` in `.env.local`
- **From address**: Set `RESEND_FROM_EMAIL` in `.env.local`
- **Form fields**: Add/remove fields in `components/sections/Contact.tsx`

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── blog/           # Blog pages
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/
│   ├── emails/         # Email templates
│   │   └── ContactEmailTemplate.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/             # Reusable UI components
│       ├── Navigation.tsx
│       └── Footer.tsx
├── public/             # Static assets
├── .env.example        # Environment variables template
└── .env.local          # Your local environment variables (not committed)
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL`
4. Deploy with one click

**Note**: Don't forget to set up your environment variables in your deployment platform for the contact form to work!

### Other Platforms

This portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- And more!

## Performance

This portfolio is optimized for performance:

- Server-side rendering with Next.js
- Optimized animations with Framer Motion
- Lazy loading of images
- Minimal JavaScript bundle size
- Fast page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Design inspired by [zeroheight.com](https://zeroheight.com)

Built with love by a designer and developer.
