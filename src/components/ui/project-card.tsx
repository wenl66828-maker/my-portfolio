import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  className?: string;
  imageLeft?: boolean;
}

export function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  tags, 
  link = "#", 
  className,
  imageLeft = true,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative group cursor-none w-full", className)}
    >
      <a href={link} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl overflow-hidden soft-panel flex flex-col md:flex-row transition-all duration-500 group-hover:shadow-lg" style={{ minHeight: "200px" }}>

          {/* Image — left or right */}
          <div
            className={cn(
              "relative w-full md:w-2/5 shrink-0 overflow-hidden",
              "h-48 md:h-auto",
              !imageLeft && "md:order-2"
            )}
            style={{ transform: "translateZ(16px)" }}
          >
            <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            className="p-6 flex flex-col gap-2.5 justify-center flex-1"
            style={{ transform: "translateZ(24px)" }}
          >
            {subtitle && (
              <p className="text-[11px] font-semibold uppercase tracking-widest font-body text-primary">
                {subtitle}
              </p>
            )}

            <h3 className="text-[17px] font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-[13px] text-muted-foreground leading-relaxed font-body">
              {description}
            </p>

            <span className="inline-flex items-center gap-1.5 text-primary font-body font-semibold text-[13px] group-hover:gap-2.5 transition-all mt-2 relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-primary group-hover:after:w-full after:transition-all after:duration-300 w-fit">
              查看作品 <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>
      </a>
    </motion.div>
  );
}
