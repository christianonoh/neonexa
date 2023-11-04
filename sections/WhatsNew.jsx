'use client';

import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col items-center mx-auto gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.25, 1 )}
        className="lg:basis-1/2 mx-auto"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} textStyles="my-4" />
        <div className="flex sm:gap-8 gap-2">
          {newFeatures.map((feature) => (
            <NewFeatures
              title={feature.title}
              img={feature.imgUrl}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className="lg:basis-1/2 mx-auto"
      >
        <img
          src="/images/whats-new.png"
          alt="get started"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
