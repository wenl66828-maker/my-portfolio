import { motion } from "framer-motion";

const bioPoints = [
  {
    label: "洞察",
    labelEn: "Insight",
    text: "人類學的田野思維和設計思考的實作經驗，使我善於深刻洞察使用者的真實需求，並運用創意解決問題，透過測試來優化體驗。因為對使用者體驗設計充滿熱忱，我在各式專案及課程中，累積豐富的設計方法與工具運用實務能力。",
  },
  {
    label: "溝通",
    labelEn: "Collaboration",
    text: "我喜歡嘗試不同領域的新事物，享受探索與學習過程中帶來的挑戰與成長，這也使我迅速適應新環境。我享受與人交流溝通，從許多跨領域合作經驗中，學會如何在傾聽不同背景夥伴想法的同時，也能清晰地傳達自身觀點，形成有效且愉快的團隊合作模式。",
  },
  {
    label: "信念",
    labelEn: "Philosophy",
    text: "對我而言，設計不只是解決問題的方法，更是一種理解世界、連結他人的途徑。我將持續學習，希望創造能真正解決問題、且兼具功能面與情感面的產品和體驗。",
  },
];

const education = [
  {
    school: "臺灣大學 創新領域學士學位學程",
    detail: ["主修｜使用者中心研究與設計、工商心理學", "輔修｜人類學系"],
  },
  {
    school: "Boston — College for Social Innovation",
    detail: ["研修 Human-Centered Design"],
  },
];

const workExp = [
  { org: "大苑藝術", role: "策展助理", logo: "images/大苑藝術 logo.jpg" },
  { org: "甘樂文創", role: "ESG 專案管理實習生", logo: "images/甘樂文創 logo.png" },
  { org: "藝信 ART record", role: "UI/UX 設計實習生", logo: "images/藝信 logo.png" },
  { org: "Leading Cities", role: "Municipal Partner Relations Fellow", logo: "images/leading_cities_logo.jpeg" },
  { org: "Portaly", role: "產品設計實習生", logo: "images/portaly logo.webp" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export function About() {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section title */}
        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50 font-body mb-3">Who I am</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold italic text-foreground">
            About me
          </h2>
        </motion.div>

        {/* ── Top row: Education + Experience ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">

          {/* Education */}
          <motion.div {...fadeUp(0.1)}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60 font-body mb-5">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="pl-4 border-l-2 border-primary/20">
                  <p className="font-bold text-[15px] text-foreground font-body leading-snug mb-1.5">
                    {edu.school}
                  </p>
                  {edu.detail.map((line, j) => (
                    <p key={j} className="text-xs text-muted-foreground font-body mt-0.5">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div {...fadeUp(0.2)}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/60 font-body mb-5">
              Experience
            </h3>
            <div className="space-y-4">
              {workExp.map((exp, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Logo */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.85)", border: "1px solid hsl(330 20% 90%)" }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${exp.logo}`}
                      alt={exp.org}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-foreground font-body leading-snug">
                      {exp.role}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      {exp.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom row: Bio cards ── */}
        <div className="flex flex-col gap-5">
          {bioPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.01 }}
              className="p-6 soft-panel rounded-2xl"
              style={i === 1 ? { alignSelf: "flex-end", width: "95%" } : {}}
            >
              {/* Card label */}
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className="text-base font-bold font-body"
                  style={{
                    background: "linear-gradient(135deg, hsl(340 65% 68%), hsl(270 45% 72%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {point.label}
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/60 font-body">
                  {point.labelEn}
                </span>
              </div>
              <p className="text-[14px] text-foreground/80 leading-loose font-body">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
