'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system with 50+ components, dark mode support, and accessibility features.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Tailwind', 'Storybook', 'Figma'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Dashboard',
    description: 'An intelligent analytics dashboard with machine learning predictions and real-time data visualization.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Mobile App',
    description: 'A cross-platform mobile application for task management with offline support and cloud sync.',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image container with overlay */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient}">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        />

        {/* Overlay icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="text-foreground" size={24} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="text-foreground" size={24} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-muted text-foreground/80 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
}
