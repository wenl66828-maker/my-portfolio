import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const titles = ["Product Designer", "UX Researcher", "Product Manager"];


export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[82vh] flex items-center pt-20 pb-16 overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">

          {/* Left: Text */}
          <div className="flex-1 text-left">
            <motion.p
              className="text-sm md:text-base text-muted-foreground font-body mb-3 tracking-widest uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm
            </motion.p>

            <motion.div
              className="flex items-baseline gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                className="font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
                  fontFamily: "'Zen Kaku Gothic Antique', 'Noto Sans TC', sans-serif",
                }}
              >
                Coco <span>李玟</span>
              </h1>

              {/* Cycling title next to name */}
              <div className="flex items-center gap-1.5 pb-0.5">
                <span className="text-muted-foreground/40 font-body text-sm select-none">·</span>
                <div className="relative overflow-hidden" style={{ height: "22px", minWidth: "136px" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="absolute text-sm font-body whitespace-nowrap"
                      style={{ color: "hsl(340 50% 58%)", fontStyle: "italic" }}
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-sm md:text-base text-muted-foreground max-w-md mb-10 leading-relaxed font-body"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Guided by{" "}
              <span style={{ color: "hsl(340 55% 58%)", fontStyle: "italic" }}>anthropological insight</span>{" "}
              and{" "}
              <span style={{ color: "hsl(270 45% 62%)", fontStyle: "italic" }}>a love for design</span>
              , I build experiences that connect people with what they need — with empathy and clarity.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Buttons row */}
              <div className="flex items-center gap-3">
                <a
                  href="#projects"
                  className="px-6 py-2.5 rounded-full font-semibold text-sm font-body whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ background: "hsl(340 65% 68%)", color: "white" }}
                >
                  查看作品
                </a>
                <a
                  href="mailto:wenl66828@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid hsl(330 30% 88%)",
                    color: "hsl(330 20% 55%)",
                  }}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/coco-wen-lee-040011314?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid hsl(330 30% 88%)",
                    color: "hsl(330 20% 55%)",
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

              </div>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            className="relative flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 90 }}
          >
            <div
              style={{
                position: "relative",
                width: 320,
                height: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Rotating floral ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full opacity-60 border-2 border-dashed border-primary/30"
                style={{
                  width: 256 + 48,
                  height: 256 + 48,
                  top: "50%",
                  left: "50%",
                  marginTop: -(256 + 48) / 2,
                  marginLeft: -(256 + 48) / 2,
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-sm">❀</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-accent text-sm">✿</div>
              </motion.div>

              {/* Profile photo */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl"
                style={{ border: "4px solid white", zIndex: 10, flexShrink: 0 }}
              >
                <img
                  src={`${BASE}images/profile.png`}
                  alt="Coco 李玟"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(45 60% 97%))" }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground font-body">
          scroll
        </span>
        <motion.span
          className="text-primary text-sm"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🌸
        </motion.span>
      </motion.div>
    </section>
  );
}
