"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect width="48" height="48" rx="16" fill="url(#g1)" />
        <path
          d="M16 24l5 5 11-11"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#4A00E0" />
            <stop offset="1" stopColor="#00D2FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Smart Writer",
    description:
      "AI-powered writing assistant that helps you draft, edit, and refine content in seconds.",
    color: "from-accent-purple to-accent-cyan",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect width="48" height="48" rx="16" fill="url(#g2)" />
        <circle cx="24" cy="20" r="6" stroke="white" strokeWidth="2.5" />
        <path
          d="M15 34c0-5 4-8 9-8s9 3 9 8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#FF6B35" />
            <stop offset="1" stopColor="#FF006E" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Image Studio",
    description:
      "Generate, transform, and enhance images with cutting-edge AI models. No design skills needed.",
    color: "from-accent-orange to-accent-pink",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect width="48" height="48" rx="16" fill="url(#g3)" />
        <path
          d="M16 28l4-8 4 5 4-10 4 13"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#00E676" />
            <stop offset="1" stopColor="#00D2FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Data Lens",
    description:
      "Turn raw data into beautiful visualizations and actionable insights with a single click.",
    color: "from-accent-green to-accent-cyan",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect width="48" height="48" rx="16" fill="url(#g4)" />
        <path
          d="M18 18h12M18 24h8M18 30h10"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#4A00E0" />
            <stop offset="1" stopColor="#FF006E" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Code Buddy",
    description:
      "Your AI pair programmer. Get code suggestions, explanations, and debugging help instantly.",
    color: "from-accent-purple to-accent-pink",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Tools,{" "}
            <span className="gradient-text">Simple Interface</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Each tool is crafted to do one thing exceptionally well.
            Pick what you need and get started in seconds.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card p-8 hover:bg-white/90 transition-all duration-300 group"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
              <div
                className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${feature.color} group-hover:w-20 transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
