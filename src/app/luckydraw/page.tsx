"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
];

const features = [
  {
    title: "Award Team Players",
    description:
      "Thank the teammates who helped you. Award the top performers and recognize contributions across your organization.",
    image: "/luckydraw/award.png",
    gradient: "from-accent-purple to-accent-cyan",
  },
  {
    title: "Employee Engagement",
    description:
      "Create a work environment that encourages employee engagement. Drive participation with fun, interactive draws.",
    image: "/luckydraw/engagement.png",
    gradient: "from-accent-orange to-accent-pink",
  },
  {
    title: "Gamification",
    description:
      "More fun in team collaboration. Add excitement to meetings, events, and everyday work with lucky draws.",
    image: "/luckydraw/gamification.png",
    gradient: "from-accent-green to-accent-cyan",
  },
  {
    title: "Team Culture",
    description:
      "Boost your team culture. Celebrate special moments and increase employee satisfaction with engaging activities.",
    image: "/luckydraw/culture.png",
    gradient: "from-accent-purple to-accent-pink",
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

export default function LuckyDrawPage() {
  const [scrolled, setScrolled] = useState(false);
  const showcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold gradient-text">
            AquaSoft
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://marketplace.microsoft.com/en-us/product/WA200000091"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent-purple to-accent-cyan text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get It Now
            </a>
          </div>

          <a
            href="https://marketplace.microsoft.com/en-us/product/WA200000091"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-gradient-to-r from-accent-purple to-accent-cyan text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get It Now
          </a>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20"
                >
                  <svg
                    className="w-5 h-5 text-accent-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-accent-orange">
                    Microsoft 365 App Award Winner
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                  <span className="gradient-text">LuckyDraw</span> Bot for
                  Microsoft Teams
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl text-text-secondary max-w-xl mb-10"
                >
                  More fun in team collaboration. Create lucky draws, award team
                  players, and boost employee engagement — all within Microsoft
                  Teams.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://marketplace.microsoft.com/en-us/product/WA200000091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-accent-purple to-accent-cyan text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 duration-200 shadow-lg shadow-accent-purple/25 text-center"
                  >
                    Add to Teams
                  </a>
                  <a
                    href="#features"
                    className="glass-card !rounded-full px-8 py-4 text-lg font-semibold hover:bg-black/5 transition-all hover:scale-105 duration-200 text-center"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative hidden lg:block"
              >
                <div className="glass-card p-4 overflow-hidden">
                  <Image
                    src="/luckydraw/hero.png"
                    alt="LuckyDraw Bot running in Microsoft Teams showing a Morning Coffee lucky draw event"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 glass-card p-3 !rounded-2xl"
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
                      Teams Ready
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

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
        </section>

        {/* Features Section */}
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
                Engage Your Team,{" "}
                <span className="gradient-text">Effortlessly</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                LuckyDraw brings gamification and recognition to Microsoft
                Teams, helping you build a more connected and motivated team.
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
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="w-full lg:w-48 flex-shrink-0 rounded-2xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                      <div
                        className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:w-20 transition-all duration-300`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Showcase Section */}
        <section
          id="showcase"
          ref={showcaseRef}
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
                  Built for{" "}
                  <span className="gradient-text">Microsoft Teams</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  LuckyDraw integrates seamlessly with Microsoft Teams. No
                  external apps, no switching contexts — everything happens right
                  where your team already works.
                </p>
                <div className="space-y-4">
                  {[
                    "Works in channels, group chats, and 1:1 chats",
                    "Simple compose extension to create draws",
                    "Automatic winner selection and announcements",
                    "Desktop, web, and mobile support",
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

              <motion.div style={{ y }} className="relative">
                <div className="glass-card p-4 overflow-hidden">
                  <Image
                    src="/luckydraw/engagement.png"
                    alt="LuckyDraw Bot running in Microsoft Teams desktop app showing an Easter Eggs lucky draw"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 glass-card p-4 !rounded-2xl"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-accent-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-accent-orange">
                      Award Winner
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2.5rem] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-purple/80 to-accent-cyan" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.3),transparent_60%)]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-white/10"
              />

              <div className="relative px-8 py-20 md:px-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Ready to Try LuckyDraw?
                </h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Add LuckyDraw to your Microsoft Teams today and start engaging
                  your team with fun, interactive draws. Free to get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://marketplace.microsoft.com/en-us/product/WA200000091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-accent-purple px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all hover:scale-105 duration-200 shadow-xl"
                  >
                    Get It from Teams Store
                  </a>
                  <a
                    href="/"
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 duration-200"
                  >
                    Explore AquaSoft
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
