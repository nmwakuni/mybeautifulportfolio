'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
            Designer & Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
        >
          Crafting Digital
          <br />
          Experiences
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          I design and build beautiful, functional websites and applications
          that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { Icon: Github, href: 'https://github.com' },
            { Icon: Linkedin, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:your@email.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
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
