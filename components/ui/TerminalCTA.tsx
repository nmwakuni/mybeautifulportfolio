'use client';

import { motion, useInView } from 'framer-motion';
import { Terminal, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const codeSnippets = [
  {
    command: 'npm create amazing-project',
    output: '✨ Creating your dream project...',
    delay: 2000,
  },
  {
    command: 'git commit -m "Exceptional design & flawless code"',
    output: '[main abc1234] 🎨 Beautiful, performant, scalable',
    delay: 3000,
  },
  {
    command: 'npm run deploy',
    output: '🚀 Deploying to production... Success!',
    delay: 2500,
  },
  {
    command: 'echo "Ready to build something extraordinary?"',
    output: 'Ready to build something extraordinary?',
    delay: 2000,
  },
];

export default function TerminalCTA() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;

    const snippet = codeSnippets[currentSnippet];
    let commandIndex = 0;
    let outputIndex = 0;

    // Reset
    setDisplayedCommand('');
    setDisplayedOutput('');
    setIsTypingCommand(true);

    // Type command
    const commandInterval = setInterval(() => {
      if (commandIndex < snippet.command.length) {
        setDisplayedCommand(snippet.command.slice(0, commandIndex + 1));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        setIsTypingCommand(false);

        // Start typing output after a brief pause
        setTimeout(() => {
          const outputInterval = setInterval(() => {
            if (outputIndex < snippet.output.length) {
              setDisplayedOutput(snippet.output.slice(0, outputIndex + 1));
              outputIndex++;
            } else {
              clearInterval(outputInterval);

              // Move to next snippet after delay
              setTimeout(() => {
                setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
              }, snippet.delay);
            }
          }, 30);
        }, 300);
      }
    }, 50);

    return () => {
      clearInterval(commandInterval);
    };
  }, [currentSnippet, isInView]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border border-primary/20 shadow-2xl"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <Sparkles size={16} />
            Let's Build Together
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to bring your
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              vision to life?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Whether it's a stunning website, a powerful web app, or a complete digital transformation,
            I'm here to turn your ideas into exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/#contact">
              <motion.div
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.div>
            </Link>
            <Link href="/#projects">
              <motion.div
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Projects
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Right side - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="relative bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex items-center justify-center gap-2 text-white/50 text-sm font-mono">
                <Terminal size={14} />
                <span>zsh</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4 min-h-[280px]">
              {/* Command Line */}
              <div className="flex items-start gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-cyan-400">~</span>
                <div className="flex-1">
                  <span className="text-white">{displayedCommand}</span>
                  {isTypingCommand && showCursor && (
                    <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                  )}
                </div>
              </div>

              {/* Output */}
              {displayedOutput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pl-4 text-white/70"
                >
                  {displayedOutput}
                  {!isTypingCommand && showCursor && (
                    <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                  )}
                </motion.div>
              )}

              {/* Status indicators */}
              <div className="pt-4 flex flex-wrap gap-3">
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Available
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  Fast Response
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  Quality Assured
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-2xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
