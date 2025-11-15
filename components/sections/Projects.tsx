'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowUpRight, BookOpen } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
    longDescription: 'Built from the ground up with performance and scalability in mind. Features include real-time inventory tracking, Stripe payment integration, advanced analytics with custom dashboards, and a responsive design that works beautifully on all devices.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'Tailwind'],
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    github: 'https://github.com',
    live: 'https://example.com',
    caseStudy: '/case-study/ecommerce-platform',
    featured: true,
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    title: 'Design System & Component Library',
    description: 'A comprehensive design system with 50+ components, built for scale with accessibility and dark mode as first-class citizens.',
    longDescription: 'Created a complete design system used by a team of 20+ developers. Includes component library, design tokens, documentation site, and Figma plugin for design handoff.',
    tags: ['React', 'Tailwind', 'Storybook', 'Figma', 'TypeScript'],
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    github: 'https://github.com',
    live: 'https://example.com',
    caseStudy: '/case-study/design-system',
    featured: true,
    year: '2024',
    role: 'Lead Designer',
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'An intelligent analytics platform powered by machine learning for real-time predictions and data visualization.',
    longDescription: 'Enterprise-grade analytics platform with AI-powered insights. Features real-time data processing, custom ML models for predictions, and beautiful interactive visualizations.',
    tags: ['Python', 'TensorFlow', 'D3.js', 'FastAPI', 'WebSockets'],
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    github: 'https://github.com',
    live: 'https://example.com',
    caseStudy: '/case-study/ai-analytics',
    featured: false,
    year: '2023',
    role: 'ML Engineer',
  },
  {
    title: 'Cross-Platform Mobile App',
    description: 'A beautiful task management app with offline-first architecture and seamless cloud synchronization.',
    longDescription: 'Built with React Native for iOS and Android. Features include offline support, real-time collaboration, push notifications, and a delightful user experience.',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    github: 'https://github.com',
    live: 'https://example.com',
    caseStudy: '/case-study/mobile-app',
    featured: false,
    year: '2023',
    role: 'Mobile Developer',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star size={16} />
            Selected Work
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A curated selection of my best work, showcasing expertise in design, development, and creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Project Cards - Full width alternating layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView
}: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Alternate left/right layout
  const imageOnLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="relative"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className={`relative group ${imageOnLeft ? 'md:order-1' : 'md:order-2'}`}
          initial={{ opacity: 0, x: imageOnLeft ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} shadow-2xl">
            {/* Placeholder gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              style={{ y }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />

            {/* Floating action buttons */}
            <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="text-white" size={20} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="text-foreground" size={20} />
              </motion.a>
            </div>

            {/* Number indicator */}
            <motion.div
              className="absolute bottom-6 left-6 text-8xl md:text-9xl font-bold text-white/10 leading-none"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>

            {/* Featured badge */}
            {project.featured && (
              <motion.div
                className="absolute top-6 left-6 px-4 py-2 rounded-full bg-yellow-500/90 backdrop-blur-sm flex items-center gap-2 text-sm font-bold text-white shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
              >
                <Star size={16} fill="white" />
                Featured
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={`space-y-6 ${imageOnLeft ? 'md:order-2' : 'md:order-1'}`}
          initial={{ opacity: 0, x: imageOnLeft ? 100 : -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        >
          {/* Year and Role */}
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <span className="px-3 py-1 rounded-full bg-muted">{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hover:from-primary hover:to-secondary transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-foreground/70 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-muted/80 text-foreground/80 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href={project.caseStudy}>
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen size={20} />
                Read Case Study
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </motion.div>
            </Link>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} />
              View Live Project
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative line */}
      {index < projects.length - 1 && (
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-border to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.8 }}
        />
      )}
    </motion.div>
  );
}
