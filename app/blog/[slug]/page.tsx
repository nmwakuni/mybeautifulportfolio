'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

// This would typically come from a CMS or markdown files
const blogPost = {
  title: 'Building Scalable Design Systems',
  date: '2024-01-15',
  readTime: '8 min',
  category: 'Design',
  gradient: 'from-blue-500 to-cyan-500',
  content: `
    <p>Design systems have become an essential part of modern product development. They help teams maintain consistency, improve efficiency, and scale their design efforts across multiple products and platforms.</p>

    <h2>What is a Design System?</h2>
    <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It's more than just a component library—it's a single source of truth for your design language.</p>

    <h2>Key Components of a Design System</h2>
    <ul>
      <li><strong>Design Tokens:</strong> The foundational variables like colors, typography, spacing, and more.</li>
      <li><strong>Component Library:</strong> Reusable UI components built with your design tokens.</li>
      <li><strong>Documentation:</strong> Clear guidelines on how to use the system.</li>
      <li><strong>Patterns:</strong> Common solutions to recurring design problems.</li>
    </ul>

    <h2>Building Your Design System</h2>
    <p>Start small and iterate. Begin with your most commonly used components and gradually expand. Here's a recommended approach:</p>

    <ol>
      <li>Audit your existing designs to identify patterns</li>
      <li>Define your design tokens (colors, typography, spacing)</li>
      <li>Create your core components (buttons, inputs, cards)</li>
      <li>Document everything clearly</li>
      <li>Get feedback and iterate</li>
    </ol>

    <h2>Tools and Technologies</h2>
    <p>Modern design systems typically leverage tools like Figma for design, Storybook for component documentation, and frameworks like React or Vue for implementation. The key is choosing tools that work well for your team and workflow.</p>

    <h2>Conclusion</h2>
    <p>A well-built design system is an investment that pays dividends in consistency, efficiency, and scalability. Start small, document thoroughly, and always keep your users in mind.</p>
  `,
};

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {blogPost.title}
            </h1>

            <div className="flex items-center gap-6 text-foreground/60">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{blogPost.readTime} read</span>
              </div>
            </div>
          </motion.div>

          {/* Gradient divider */}
          <div className={`h-1 w-full bg-gradient-to-r ${blogPost.gradient} rounded-full mb-12`} />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              color: 'var(--foreground)',
            }}
          />
        </div>
      </article>

      <Footer />

      <style jsx global>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: var(--foreground);
          opacity: 0.8;
        }

        .prose ul,
        .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }

        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
          color: var(--foreground);
          opacity: 0.8;
        }

        .prose strong {
          font-weight: 600;
          color: var(--color-primary);
        }
      `}</style>
    </main>
  );
}
