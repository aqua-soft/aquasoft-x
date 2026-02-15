"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-purple/80 to-accent-cyan" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.3),transparent_60%)]" />

          {/* Decorative shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-white/10"
          />

          <div className="relative px-8 py-20 md:px-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of users who are already supercharging their
              workflow with AquaSoft&apos;s AI tools. Free to try, no credit card
              required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-accent-purple px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all hover:scale-105 duration-200 shadow-xl"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
