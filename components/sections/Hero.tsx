'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code2, Palette, Sparkles, Zap, Layers, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Floating icons data
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%', color: 'from-blue-500 to-cyan-500' },
    { Icon: Palette, delay: 0.5, x: '85%', y: '15%', color: 'from-purple-500 to-pink-500' },
    { Icon: Sparkles, delay: 1, x: '15%', y: '70%', color: 'from-yellow-500 to-orange-500' },
    { Icon: Zap, delay: 1.5, x: '80%', y: '65%', color: 'from-green-500 to-emerald-500' },
    { Icon: Layers, delay: 2, x: '50%', y: '10%', color: 'from-indigo-500 to-purple-500' },
    { Icon: Terminal, delay: 2.5, x: '90%', y: '45%', color: 'from-pink-500 to-rose-500' },
  ];

  // Geometric shapes data
  const shapes = [
    { size: 'w-32 h-32', x: '5%', y: '25%', delay: 0, rotate: 45, color: 'bg-primary/20' },
    { size: 'w-24 h-24', x: '75%', y: '20%', delay: 0.5, rotate: 30, color: 'bg-secondary/20' },
    { size: 'w-40 h-40', x: '10%', y: '65%', delay: 1, rotate: 60, color: 'bg-accent/20' },
    { size: 'w-28 h-28', x: '85%', y: '70%', delay: 1.5, rotate: 15, color: 'bg-primary/15' },
  ];

  return (
    <section className="min-h-screen mt-10 flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Large gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/30 via-purple-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} backdrop-blur-sm`}
          style={{
            left: shape.x,
            top: shape.y,
            borderRadius: '20%',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
            rotate: [shape.rotate, shape.rotate + 180, shape.rotate],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating animated icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className={`absolute hidden md:block`}
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl backdrop-blur-sm`}>
              <Icon size={32} className="text-white" />
            </div>
          </motion.div>
        );
      })}

      {/* Particle effects - small dots that follow mouse */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) / (50 + i * 5),
            y: (mousePosition.y - window.innerHeight / 2) / (50 + i * 5),
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated code brackets */}
      <motion.div
        className="absolute left-10 top-1/3 text-6xl font-mono text-primary/20 hidden lg:block"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        {'<'}
      </motion.div>
      <motion.div
        className="absolute right-10 top-1/3 text-6xl font-mono text-secondary/20 hidden lg:block"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        {'>'}
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm font-medium backdrop-blur-md border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            Designer & Developer
            <Sparkles size={16} />
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent inline-block">
            Crafting Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent inline-block">
            Experiences
          </span>

          {/* Decorative underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I design and build{' '}
          <span className="text-primary font-semibold">beautiful</span>,{' '}
          <span className="text-secondary font-semibold">functional</span> websites and applications
          that make a <span className="text-accent font-semibold">difference</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-primary/50 hover:shadow-2xl hover:shadow-primary/60 transition-all duration-300">
            <Link href="#projects" className="flex items-center gap-2">
              <Layers size={20} />
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </MagneticButton>
          <MagneticButton className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm">
            <Link href="#contact">
              Get in Touch
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: 'https://github.com', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
          ].map(({ Icon, href, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-muted/50 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} className="text-foreground/70 group-hover:text-primary transition-colors" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="text-xs text-foreground/50 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
