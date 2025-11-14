'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, Award, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    size: 'large', // Will span more space
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system with 50+ components, dark mode support, and accessibility features.',
    tags: ['React', 'Tailwind', 'Storybook', 'Figma'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    size: 'medium',
  },
  {
    title: 'AI Dashboard',
    description: 'An intelligent analytics dashboard with machine learning predictions and real-time data visualization.',
    tags: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    size: 'medium',
  },
  {
    title: 'Mobile App',
    description: 'A cross-platform mobile application for task management with offline support and cloud sync.',
    tags: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    size: 'large',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            Portfolio Showcase
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in design and development
          </p>
        </motion.div>

        {/* Asymmetric bento-box layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Unique entry animations
  const entryVariants = [
    { opacity: 0, y: 60, rotate: -5 },
    { opacity: 0, x: -60, scale: 0.8 },
    { opacity: 0, y: -60, rotate: 5 },
    { opacity: 0, x: 60, scale: 0.8 },
  ];

  // Dynamic grid column spans for asymmetric layout
  const gridSpans = [
    'md:col-span-7', // Large
    'md:col-span-5', // Medium
    'md:col-span-5', // Medium
    'md:col-span-7', // Large
  ];

  // Unique hover rotations
  const hoverRotations = [2, -2, 3, -3];

  return (
    <motion.div
      ref={cardRef}
      initial={entryVariants[index % 4]}
      animate={isInView ? { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${gridSpans[index]}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      whileHover={{
        scale: 1.02,
        rotate: hoverRotations[index],
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Particle decoration around card */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-60`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: isHovered ? [0, 1.5, 0] : 0,
            rotate: [0, 360],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-yellow-500/90 backdrop-blur-sm flex items-center gap-1.5 text-xs font-bold text-white"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Star size={14} fill="white" />
          Featured
        </motion.div>
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image container with dynamic gradient */}
      <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{ duration: 2 }}
        />

        {/* Animated pattern overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          animate={{
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating tech stack indicators */}
        <motion.div
          className="absolute top-4 left-4 flex gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {project.tags.slice(0, 2).map((tag, i) => (
            <motion.span
              key={i}
              className="px-2.5 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Overlay action buttons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="text-foreground" size={24} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-xl`}
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="text-white" size={24} />
          </motion.a>
        </motion.div>

        {/* Animated border shine effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"
          animate={{
            borderColor: isHovered ? ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)'] : 'rgba(255,255,255,0)',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Content section */}
      <div className="p-6 relative">
        <motion.h3
          className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300"
          animate={{
            x: isHovered ? [0, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-foreground/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Enhanced tags with animations */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1.5 text-sm bg-muted/80 text-foreground/80 rounded-full border border-transparent group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
              whileHover={{
                scale: 1.1,
                y: -2,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.1 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Trending indicator for featured projects */}
        {project.featured && (
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-1.5 text-xs text-primary font-semibold"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <TrendingUp size={14} />
            <span>Trending</span>
          </motion.div>
        )}
      </div>

      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </motion.div>
  );
}
