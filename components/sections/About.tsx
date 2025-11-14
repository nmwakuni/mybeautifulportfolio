'use client';

import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Rocket, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Expert in modern web technologies including React, Next.js, TypeScript, and Node.js',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful, user-centered designs with Figma, Adobe XD, and modern design principles',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, optimized applications with best practices and cutting-edge techniques',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    title: 'Experience',
    description: 'Crafting delightful user experiences with attention to detail and smooth interactions',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate designer and developer with a love for creating
            beautiful, functional digital experiences. With expertise in both
            design and code, I bridge the gap between aesthetics and
            functionality.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '30+', label: 'Happy Clients' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-all duration-300 hover:shadow-xl"
    >
      <motion.div
        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} mb-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Icon className="text-white" size={28} />
      </motion.div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {skill.title}
      </h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {skill.description}
      </p>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
    </motion.div>
  );
}
