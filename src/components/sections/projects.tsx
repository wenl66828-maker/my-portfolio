import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "「南山Explore學院」數位學習平台\n員工入職體驗服務創新與設計",
    subtitle: "臺灣科技大學 X 南山人壽",
    description:
      "以服務設計方法介入南山人壽入職流程，深入探討新人投遞履歷到通過試用期間的痛點，設計出兼顧情感支持與制度需求的數位學習平台「南山Explore學院」，獲企業內部金獎肯定。",
    image: `${import.meta.env.BASE_URL}images/project1.png`,
    tags: ["服務設計", "UX Research", "UI/UX"],
    link: "https://individual-store-556557.framer.app/%E5%8D%97%E5%B1%B1",
  },
  {
    title: "〈幸福好朋友陪伴指南〉\n獨居長者關懷志工支援服務設計",
    subtitle: "堉璘臺大人才培育計畫 @中華民國老人福利推動聯盟",
    description:
      "透過田野訪談與服務歷程分析，打造一套實用且顧及使用者服務場景的陪伴手冊，協助志工在與獨居長者建立關係、覺察其生活潛在問題與實際解決問題時更有方法與信心。此專案通過選會，獲得30萬執行經費，以及個人90萬海外研習獎學金。",
    image: `${import.meta.env.BASE_URL}images/project2.jpg`,
    tags: ["服務設計", "田野調查", "共創工作坊"],
    link: "https://individual-store-556557.framer.app/%E7%8E%89%E6%9E%97",
  },
  {
    title: "Tie-together｜拉近離巢子女與父母的關係",
    subtitle: "臺灣大學 使用者經驗研究與設計 專案",
    description:
      "聚焦離巢後親子關係疏離的情感痛點，設計LINE官方帳號原型，產品包含四大功能模組，從日常互動、情緒釋放到儀式感交流，協助子女自在表達、父母感受到子女的生活和關心。",
    image: `${import.meta.env.BASE_URL}images/project3.png`,
    tags: ["使用者經驗研究", "UI/UX", "LINE官方帳號"],
    link: "https://individual-store-556557.framer.app/%E9%9B%A2%E5%B7%A2",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 font-body mb-3">
            MY WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold italic text-foreground">
            My projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard 
                {...project} 
                title={project.title.replace("\n", " ")} 
                imageLeft={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
