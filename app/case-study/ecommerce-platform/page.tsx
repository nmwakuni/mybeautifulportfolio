'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Target, Lightbulb, Code, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import TerminalCTA from '@/components/ui/TerminalCTA';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/#projects">
          <motion.div
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary mb-8 cursor-pointer"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </motion.div>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            E-Commerce Platform
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Building a scalable e-commerce solution that transformed online retail experience
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Full Stack Developer</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-96 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 mb-16 shadow-2xl"
        />

        {/* The Challenge */}
        <Section
          icon={<Target className="text-primary" size={24} />}
          title="The Challenge"
          delay={0.3}
        >
          <p className="text-foreground/70 leading-relaxed mb-4">
            The client needed a robust e-commerce platform capable of handling thousands of concurrent users
            while maintaining blazing-fast performance. Their existing solution was struggling with inventory
            sync issues and had a checkout abandonment rate of 68%.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The goal was clear: build a modern, scalable platform that provides a seamless shopping experience
            while reducing cart abandonment and improving operational efficiency.
          </p>
        </Section>

        {/* The Inspiration */}
        <Section
          icon={<Lightbulb className="text-secondary" size={24} />}
          title="The Inspiration"
          delay={0.4}
        >
          <p className="text-foreground/70 leading-relaxed mb-4">
            After analyzing user behavior and conducting extensive market research, I discovered that customers
            valued three things above all: speed, transparency, and trust. This insight became the foundation
            of our design philosophy.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            I drew inspiration from industry leaders like Shopify and Stripe, focusing on creating an intuitive
            interface that reduces cognitive load while maintaining powerful features under the hood.
          </p>
        </Section>

        {/* The Process */}
        <Section
          icon={<Code className="text-accent" size={24} />}
          title="The Process"
          delay={0.5}
        >
          <div className="space-y-6">
            <ProcessStep
              number="01"
              title="Discovery & Research"
              description="Conducted user interviews, analyzed competitors, and mapped out user journeys to understand pain points and opportunities."
            />
            <ProcessStep
              number="02"
              title="Architecture & Planning"
              description="Designed a microservices architecture using Next.js for the frontend and Node.js with PostgreSQL for the backend, ensuring scalability and maintainability."
            />
            <ProcessStep
              number="03"
              title="Development & Iteration"
              description="Built the platform in sprints, implementing features like real-time inventory sync, Stripe payment integration, and an analytics dashboard. Continuous testing ensured quality at every step."
            />
            <ProcessStep
              number="04"
              title="Launch & Optimization"
              description="Deployed using Vercel with Redis caching for optimal performance. Post-launch monitoring and A/B testing drove continuous improvements."
            />
          </div>
        </Section>

        {/* The Solution */}
        <Section
          icon={<Rocket className="text-primary" size={24} />}
          title="The Solution"
          delay={0.6}
        >
          <p className="text-foreground/70 leading-relaxed mb-6">
            The final platform delivers a lightning-fast shopping experience with real-time inventory updates,
            seamless checkout flow, and comprehensive analytics. Built with Next.js 14 and TypeScript for
            type safety and performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="Real-Time Sync"
              description="Inventory updates across all channels instantly"
            />
            <FeatureCard
              title="Smart Checkout"
              description="One-click checkout with saved preferences"
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Real-time insights into sales and customer behavior"
            />
          </div>
        </Section>

        {/* The Results */}
        <Section
          icon={<TrendingUp className="text-green-500" size={24} />}
          title="The Results"
          delay={0.7}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard
              value="68% → 22%"
              label="Cart Abandonment"
              color="from-green-500 to-emerald-500"
            />
            <MetricCard
              value="2.3s → 0.8s"
              label="Page Load Time"
              color="from-blue-500 to-cyan-500"
            />
            <MetricCard
              value="+145%"
              label="Conversion Rate"
              color="from-purple-500 to-pink-500"
            />
          </div>
          <p className="text-foreground/70 leading-relaxed">
            Within three months of launch, the platform processed over $2M in transactions and received
            a 4.9/5 customer satisfaction rating. The client reported a 3x increase in operational efficiency
            and significantly reduced infrastructure costs.
          </p>
        </Section>

        {/* Tech Stack */}
        <Section
          title="Technologies Used"
          delay={0.8}
        >
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Vercel', 'WebSockets'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-foreground/80 font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-16">
          <TerminalCTA />
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  delay,
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
}

function MetricCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {value}
      </div>
      <div className="text-sm text-foreground/60">{label}</div>
    </div>
  );
}
