'use client';
import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "@/constants";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="max-w-4xl text-center mx-auto" />
      <div>
        {insights.map((insight, index) => (
          <InsightCard
            number={index + 1}
            title={insight.title}
            subtitle={insight.subtitle}
            imgUrl={insight.imgUrl}
          />
        ))}
      </div>
    </motion.div>

  </section>
);

export default Insights;
