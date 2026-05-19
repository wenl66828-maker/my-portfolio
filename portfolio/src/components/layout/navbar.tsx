import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{ scaleX, background: "linear-gradient(90deg, hsl(340 65% 68%), hsl(270 45% 72%))" }}
      />
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 shadow-sm"
            : "py-6 bg-transparent"
        }`}
        style={scrolled ? { 
          background: "rgba(255, 251, 248, 0.90)", 
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)" 
        } : {}}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-display font-medium italic text-foreground flex items-center gap-1 group"
          >
            Coco
            <motion.span 
              className="text-primary text-xl not-italic"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ✿
            </motion.span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-body">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full rounded-full"
                  style={{ background: "hsl(340 65% 68%)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`${BASE}images/resume.pdf`}
              download
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid hsl(330 30% 88%)",
                color: "hsl(340 40% 55%)",
              }}
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "hsl(340 65% 68%)",
                color: "white",
                boxShadow: "0 4px 14px rgba(230, 120, 150, 0.2)"
              }}
            >
              聯絡我
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
