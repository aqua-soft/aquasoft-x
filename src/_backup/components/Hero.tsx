"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="gradient-blob w-[500px] h-[500px] bg-accent-purple/40 top-1/4 -left-20"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="gradient-blob w-[600px] h-[600px] bg-accent-cyan/30 top-1/3 -right-32"
      />
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="gradient-blob w-[400px] h-[400px] bg-accent-pink/20 bottom-1/4 left-1/3"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-accent-purple/5 border border-accent-purple/15 text-text-secondary text-sm"
        >
          Powered by AI, Built for Simplicity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          AI Tools for{" "}
          <span className="gradient-text">Everyone</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Discover smart, lightweight AI tools that simplify your workflow.
          From text to images, data to insights — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#features"
            className="bg-gradient-to-r from-accent-purple to-accent-cyan text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 duration-200 shadow-lg shadow-accent-purple/25"
          >
            Explore Tools
          </a>
          <a
            href="#how-it-works"
            className="glass-card !rounded-full px-8 py-4 text-lg font-semibold hover:bg-black/5 transition-all hover:scale-105 duration-200"
          >
            Learn More
          </a>
        </motion.div>

        {/* Decorative floating shapes */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-orange to-accent-pink opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-green opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [-8, 12, -8], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-20 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-cyan opacity-15 hidden lg:block"
        />
      </div>
    </section>
  );
}
