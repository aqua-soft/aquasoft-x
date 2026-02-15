"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Tool",
    description:
      "Browse our collection of AI-powered tools and pick the one that fits your task.",
    gradient: "from-accent-purple to-accent-cyan",
  },
  {
    number: "02",
    title: "Provide Your Input",
    description:
      "Upload your file, paste your text, or simply describe what you need. It's that easy.",
    gradient: "from-accent-cyan to-accent-green",
  },
  {
    number: "03",
    title: "Get Results Instantly",
    description:
      "Our AI processes your request in seconds. Download, share, or iterate on your results.",
    gradient: "from-accent-green to-accent-orange",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="gradient-blob w-[500px] h-[500px] bg-accent-green/20 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Three simple steps to transform your workflow with AI.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-orange opacity-20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-8">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-20 -z-10`}
                  />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
