"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "AquaSoft's tools have completely transformed how our team handles content creation. What used to take hours now takes minutes.",
    name: "Sarah Chen",
    role: "Marketing Director",
    avatar: "SC",
    gradient: "from-accent-purple to-accent-cyan",
  },
  {
    quote:
      "The image generation tool is incredible. As a solo founder, it's like having a design team in my pocket.",
    name: "Marcus Johnson",
    role: "Startup Founder",
    avatar: "MJ",
    gradient: "from-accent-orange to-accent-pink",
  },
  {
    quote:
      "Data Lens turned our messy spreadsheets into beautiful dashboards. My clients are impressed every time.",
    name: "Aiko Tanaka",
    role: "Data Consultant",
    avatar: "AT",
    gradient: "from-accent-green to-accent-cyan",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="gradient-blob w-[400px] h-[400px] bg-accent-pink/15 right-0 top-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">Creators</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join thousands of professionals who use AquaSoft every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-accent-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${t.gradient} flex items-center justify-center text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-text-secondary text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
