"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Smart Writer", "Image Studio", "Data Lens", "Code Buddy"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialIcons = [
  {
    label: "Twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "GitHub",
    path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text inline-block mb-4"
            >
              AquaSoft
            </motion.a>
            <p className="text-text-secondary text-sm leading-relaxed">
              Intelligent AI tools designed for everyone. Simple, powerful, and
              always evolving.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} AquaSoft. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label={icon.label}
              >
                <svg
                  className="w-5 h-5 text-text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
