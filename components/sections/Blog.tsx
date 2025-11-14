'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const blogPosts = [
  {
    title: 'Building Scalable Design Systems',
    excerpt: 'Learn how to create and maintain design systems that scale with your product and team.',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Design',
    gradient: 'from-blue-500 to-cyan-500',
    slug: 'building-scalable-design-systems',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends that are shaping the future of web development.',
    date: '2024-01-10',
    readTime: '6 min',
    category: 'Development',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'future-of-web-development',
  },
  {
    title: 'Mastering Framer Motion',
    excerpt: 'A deep dive into creating buttery-smooth animations with Framer Motion in React applications.',
    date: '2024-01-05',
    readTime: '10 min',
    category: 'Tutorial',
    gradient: 'from-orange-500 to-red-500',
    slug: 'mastering-framer-motion',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on design, development, and everything in between
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
          >
            View All Articles
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post, index, isInView }: { post: typeof blogPosts[0]; index: number; isInView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />

      <div className="p-6">
        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read more link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
    </motion.article>
  );
}
