'use client';

import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion"

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} flex lg:flex-row flex-col items-center mx-auto gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className="lg:basis-1/2 mx-auto"
      >
        <img
          src="/images/get-started.png"
          alt="get started"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.25, 1 )}
        className="lg:basis-1/2 z-10"
      >
        <TypingText title="| How NEONEXA works" textStyles="" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="max-w-sm">
          {startingFeatures.map((feature, index) => (
          <StartSteps
            key={index + 1}
            feature={feature}
            index={index} 
          />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
