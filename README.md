# Beautiful Portfolio Website

A stunning portfolio website built with Next.js, TypeScript, and Framer Motion, inspired by zeroheight.com's design aesthetic.

## Features

- **Smooth Animations**: Buttery-smooth scroll animations and micro-interactions using Framer Motion
- **Hero Section**: Eye-catching hero with animated gradients, floating shapes, and smooth entrance animations
- **Projects Showcase**: Beautiful project cards with hover effects and transitions
- **About Section**: Scroll-triggered animations highlighting skills and statistics
- **Blog**: Full blog system with listing page and article pages
- **Contact Form**: Validated contact form using React Hook Form and Zod
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

### 6. Contact Form

Update the contact form submission in `components/sections/Contact.tsx`:

- Replace the simulated API call with your actual endpoint
- Update email address for the mailto link

## Project Structure

```
├── app/
│   ├── blog/           # Blog pages
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/             # Reusable UI components
│       ├── Navigation.tsx
│       └── Footer.tsx
└── public/             # Static assets
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

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
