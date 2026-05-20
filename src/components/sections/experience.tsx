import { motion } from "framer-motion";

const softwareSkills = [
  "Figma", "Canva", "Adobe Illustrator", "Notion", "Miro",
  "Google Workspace", "Linear", "Mixpanel", "Brevo",
];

const uxSkills = ["Wireframing", "Prototyping", "Design System", "Visual Composition", "Mock-up"];
const researchSkills = ["Design Thinking", "Interview", "Empathy Map", "User Story Board", "User Journey Map", "Persona", "Value Proposition", "User Flow", "Usability Test"];
const designSkills = ["Visual Design", "Graphic Design", "Photography"];

const personalSkills = [
  "Analytical", "Empathetic", "Insightful",
  "Creative", "Adaptive", "Collaborative",
  "Storytelling", "Reflective",
];

const Pill = ({ label, color }: { label: string; color: string }) => (
  <span
    className="px-3 py-1 rounded-full text-[12px] font-medium font-body"
    style={{
      background: `${color}18`,
      color,
      border: `1px solid ${color}30`,
    }}
  >
    {label}
  </span>
);


export function Experience() {
  return (
    <section id="skills" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50 font-body mb-3">What I bring</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold italic text-foreground">
            My garden of skills
          </h2>
        </motion.div>

        {/* Grid: left wide + right stacked */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

          {/* LEFT: Technical — wide */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-3 p-7 rounded-2xl soft-panel flex flex-col gap-6 transition-shadow hover:shadow-lg"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-body mb-1"
                style={{ color: "hsl(340 55% 65%)" }}>
                Technical
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground">UI/UX & Design</h3>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-body font-semibold mb-2.5">
                  Design Practice
                </p>
                <div className="flex flex-wrap gap-2">
                  {[...uxSkills, ...designSkills].map((s) => (
                    <Pill key={s} label={s} color="hsl(340 55% 62%)" />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-body font-semibold mb-2.5">
                  User Research
                </p>
                <div className="flex flex-wrap gap-2">
                  {researchSkills.map((s) => (
                    <Pill key={s} label={s} color="hsl(270 40% 62%)" />
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Software + Personal stacked */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl soft-panel flex flex-col gap-5 transition-shadow hover:shadow-lg"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-body mb-1"
                  style={{ color: "hsl(40 80% 52%)" }}>
                  Software
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">Tools</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2">
                {softwareSkills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[13px] font-body text-foreground/75">
                    <span className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "hsl(40 70% 60%)" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Personal */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl soft-panel flex flex-col gap-5 transition-shadow hover:shadow-lg"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-body mb-1"
                  style={{ color: "hsl(220 55% 65%)" }}>
                  Personal
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalSkills.map((s) => (
                  <Pill key={s} label={s} color="hsl(220 50% 62%)" />
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
