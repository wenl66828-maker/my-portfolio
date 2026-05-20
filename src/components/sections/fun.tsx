import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const photos: { src: string; rotate: number; love: string }[] = [
  { src: "images/coco-profile-ref.png",                       rotate: -4, love: "chasing golden hour on the badminton court" },
  { src: "images/CEFD524C-A68E-4414-BCF1-82B3A179AACF.JPG",  rotate:  3, love: "painting, doodling, and making things by hand" },
  { src: "images/_DSC1413_Original.jpg",                      rotate: -2, love: "spending time with little kids" },
  { src: "images/IMG_3073.HEIC",                              rotate:  5, love: "strumming guitar and singing" },
  { src: "images/IMG_7802.heic",                              rotate: -3, love: "picnicking under blossoms with nowhere else to be" },
];

function PhotoCard({ src, rotate, love, delay }: { src: string; rotate: number; love: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    /* Outer wrapper: NO rotation — bubble is positioned relative to this */
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      style={{ position: "relative", flexShrink: 0, zIndex: isHovered ? 20 : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech bubble — sits in the un-rotated layer, always centered above the card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.94 }}
            transition={{ duration: 0.16 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 14px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "white",
              borderRadius: "12px",
              padding: "8px 13px",
              boxShadow: "0 4px 18px rgba(180,100,120,0.18), 0 1px 4px rgba(0,0,0,0.07)",
              whiteSpace: "nowrap",
              fontSize: "12px",
              fontFamily: "'Poppins', sans-serif",
              color: "hsl(340 35% 45%)",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            {love}
            <span
              style={{
                position: "absolute",
                bottom: -7,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: "8px solid white",
                display: "block",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo card — rotation applied HERE only */}
      <motion.div
        animate={{ scale: isHovered ? 1.06 : 1, rotate }}
        transition={{ duration: 0.2 }}
        style={{
          background: "white",
          borderRadius: "4px",
          padding: "6px 6px 20px",
          boxShadow: isHovered
            ? "0 8px 28px rgba(180,100,120,0.22), 0 2px 6px rgba(0,0,0,0.09)"
            : "0 4px 16px rgba(180,100,120,0.13), 0 1px 4px rgba(0,0,0,0.07)",
          cursor: "default",
          transition: "box-shadow 0.2s",
        }}
      >
        <div
          style={{
            width: 128,
            height: 158,
            borderRadius: "2px",
            overflow: "hidden",
            background: "linear-gradient(135deg, hsl(340 30% 93%), hsl(270 30% 93%))",
          }}
        >
          <img
            src={`${BASE}${src}`}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Fun() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">

        <motion.p
          className="text-center font-display italic font-semibold mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "hsl(340 40% 48%)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Outside of work, I love:
        </motion.p>

        <div className="flex items-end justify-center gap-4 flex-wrap">
          {photos.map((p, i) => (
            <PhotoCard key={i} src={p.src} rotate={p.rotate} love={p.love} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}
