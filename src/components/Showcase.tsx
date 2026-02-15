"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="gradient-blob w-[600px] h-[600px] bg-accent-purple/25 -left-40 top-0" />
      <div className="gradient-blob w-[400px] h-[400px] bg-accent-cyan/20 right-0 bottom-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beautiful Results,{" "}
              <span className="gradient-text">Zero Effort</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Our tools are designed with simplicity at the core. No steep
              learning curves, no complex configurations. Just intelligent
              software that understands what you need and delivers.
            </p>
            <div className="space-y-4">
              {[
                "Intuitive drag-and-drop interface",
                "Real-time AI processing",
                "Export in any format you need",
                "Works on all devices",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y, rotate }} className="relative">
            {/* Mock product UI card */}
            <div className="glass-card p-6 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent-pink" />
                <div className="w-3 h-3 rounded-full bg-accent-orange" />
                <div className="w-3 h-3 rounded-full bg-accent-green" />
              </div>
              <div className="space-y-3">
                <div className="h-4 rounded-full bg-black/10 w-3/4" />
                <div className="h-4 rounded-full bg-black/10 w-full" />
                <div className="h-4 rounded-full bg-black/10 w-5/6" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="h-24 rounded-2xl bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <div className="h-24 rounded-2xl bg-gradient-to-br from-accent-orange/30 to-accent-pink/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan w-2/3" />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-4 !rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-green to-accent-cyan flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-accent-green">
                  AI Ready
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
