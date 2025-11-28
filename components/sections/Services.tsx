'use client';

import { motion, useInView } from 'framer-motion';
import { Workflow, Palette, Figma as FigmaIcon, Code, Zap, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building fast, scalable, and beautiful web applications with modern frameworks.',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Creating stunning, user-centric designs that convert visitors into customers.',
    tools: ['Webflow', 'Framer', 'Responsive Design', 'UI/UX'],
    gradient: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-500',
  },
  {
    icon: FigmaIcon,
    title: 'Design Systems',
    description: 'Crafting comprehensive design systems and component libraries in Figma.',
    tools: ['Figma', 'Design Tokens', 'Components', 'Prototyping'],
    gradient: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-500',
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    description: 'Streamlining workflows with intelligent automation using cutting-edge AI tools.',
    tools: ['n8n', 'Zapier', 'AI Integration', 'Workflow Design'],
    gradient: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
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
            <Sparkles size={16} />
            What I Do
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From design to development, automation to optimization—I bring your digital vision to life with precision and creativity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-8 rounded-3xl bg-card-bg border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Floating gradient orb */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px]`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
              <Icon className={service.iconColor} size={28} />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-foreground/70 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool, i) => (
              <motion.span
                key={i}
                className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground/70 rounded-full border border-border group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity">
            <motion.path
              d="M 100 0 L 100 100 L 0 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={service.iconColor}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
            />
          </svg>
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
        />
      </div>
    </motion.div>
  );
}
