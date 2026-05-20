import { motion } from "framer-motion";
import { Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("wenl66828@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer id="contact" className="relative z-10 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-6 md:px-14 py-5"
        style={{
          background: "rgba(255,255,255,0.6)",
          borderTop: "1px solid hsl(330 30% 90%)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Left */}
        <div className="flex flex-col gap-0.5">
          <span
            className="font-display italic font-semibold"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "hsl(340 40% 45%)" }}
          >
            Thanks so much for visiting!
          </span>
          <span className="font-body text-xs" style={{ color: "hsl(330 20% 60%)" }}>
            © Coco 李玟, 2026. All Rights Reserved
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center flex-wrap gap-3">
          {/* Email + copy icon */}
          <div className="flex items-center gap-1.5">
            <span className="font-body text-sm" style={{ color: "hsl(330 25% 50%)" }}>
              wenl66828@gmail.com
            </span>
            <button
              onClick={copyEmail}
              title="Copy email"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: copied ? "hsl(340 60% 60%)" : "hsl(330 20% 65%)" }}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Divider */}
          <span style={{ color: "hsl(330 20% 80%)" }}>·</span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/coco-wen-lee-040011314?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-sm transition-all duration-200 hover:opacity-70"
            style={{ color: "hsl(330 25% 50%)" }}
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
