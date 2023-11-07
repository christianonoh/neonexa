'use client';

import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import WhatsNewImg from '/public/images/whats-new.png'
import Image from "next/image";

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
        variants={fadeIn('right', 'tween', 0.25, 0.8 )}
        className="lg:basis-1/2 mx-auto"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} textStyles="my-4" />
        <div className="flex sm:gap-8 gap-2">
          {newFeatures.map((feature, index) => (
            <NewFeatures
              key={feature.title}
              title={feature.title}
              img={feature.imgUrl}
              subtitle={feature.subtitle}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className="lg:basis-1/2 mx-auto"
      >
        <Image
          src={WhatsNewImg}
          alt="get started"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
