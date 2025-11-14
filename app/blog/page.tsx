'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

const blogPosts = [
  {
    title: 'Building Scalable Design Systems',
    excerpt: 'Learn how to create and maintain design systems that scale with your product and team. We\'ll explore best practices, tools, and methodologies.',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Design',
    gradient: 'from-blue-500 to-cyan-500',
    slug: 'building-scalable-design-systems',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends that are shaping the future of web development, from AI integration to WebAssembly.',
    date: '2024-01-10',
    readTime: '6 min',
    category: 'Development',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'future-of-web-development',
  },
  {
    title: 'Mastering Framer Motion',
    excerpt: 'A deep dive into creating buttery-smooth animations with Framer Motion in React applications. Perfect for creating engaging user experiences.',
    date: '2024-01-05',
    readTime: '10 min',
    category: 'Tutorial',
    gradient: 'from-orange-500 to-red-500',
    slug: 'mastering-framer-motion',
  },
  {
    title: 'TypeScript Best Practices',
    excerpt: 'Improve your TypeScript code with these battle-tested best practices and patterns used by top development teams.',
    date: '2023-12-28',
    readTime: '7 min',
    category: 'Development',
    gradient: 'from-green-500 to-emerald-500',
    slug: 'typescript-best-practices',
  },
  {
    title: 'Responsive Design in 2024',
    excerpt: 'Modern approaches to responsive design that go beyond media queries. Learn about container queries, fluid typography, and more.',
    date: '2023-12-20',
    readTime: '9 min',
    category: 'Design',
    gradient: 'from-pink-500 to-rose-500',
    slug: 'responsive-design-2024',
  },
  {
    title: 'Performance Optimization Tips',
    excerpt: 'Speed up your web applications with these proven performance optimization techniques and tools.',
    date: '2023-12-15',
    readTime: '11 min',
    category: 'Development',
    gradient: 'from-indigo-500 to-purple-500',
    slug: 'performance-optimization-tips',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on design, development, and everything in between
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />

                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
