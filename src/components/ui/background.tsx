import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FLORA_ICONS = ["🌸", "🌺", "🌼", "✿", "❀", "🌿", "🌱", "✨"];

interface Petal {
  id: number;
  icon: string;
  x: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
}

export function Background() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const generatedPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      icon: FLORA_ICONS[Math.floor(Math.random() * FLORA_ICONS.length)],
      x: Math.random() * 100, // percentage
      duration: 15 + Math.random() * 20, // 15s to 35s falling
      delay: Math.random() * -20, // random start time
      size: 14 + Math.random() * 18, // 14px to 32px
      rotation: Math.random() * 360,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#fffbf8]">
      {/* Soft radial gradients */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(250, 200, 210, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(220, 200, 240, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 245, 230, 0.6) 0%, transparent 70%)"
        }}
      />

      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "5%", "-5%"],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vh] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(340 80% 88%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["5%", "-5%", "5%"],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vh] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 88%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Falling Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5vh] opacity-40 mix-blend-multiply"
          initial={{ 
            x: `${petal.x}vw`, 
            y: "-10vh",
            rotate: petal.rotation
          }}
          animate={{
            y: "110vh",
            x: [`${petal.x}vw`, `${petal.x - 5}vw`, `${petal.x + 5}vw`, `${petal.x}vw`],
            rotate: petal.rotation + 360,
          }}
          transition={{
            y: {
              duration: petal.duration,
              repeat: Infinity,
              ease: "linear",
              delay: petal.delay,
            },
            x: {
              duration: petal.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: petal.delay,
            },
            rotate: {
              duration: petal.duration,
              repeat: Infinity,
              ease: "linear",
              delay: petal.delay,
            }
          }}
          style={{ fontSize: `${petal.size}px` }}
        >
          {petal.icon}
        </motion.div>
      ))}
    </div>
  );
}
