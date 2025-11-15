'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setError(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      console.error('Error sending message:', err);
    }
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
            Drop me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, I'll try my best to get back
                to you!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:your@email.com"
                className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground/60">Email</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">
                    your@email.com
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative h-64 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

              {/* Animated floating orbs */}
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 80, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 blur-2xl"
                animate={{
                  x: [200, 50, 200],
                  y: [100, 20, 100],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 blur-3xl"
                animate={{
                  x: [100, 20, 100],
                  y: [50, 150, 50],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-center p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  className="mb-6"
                >
                  <CheckCircle2 className="text-green-500" size={64} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <p className="text-sm text-red-600">{error}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
