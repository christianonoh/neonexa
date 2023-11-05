'use client';

import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText 
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="max-w-4xl text-center mx-auto"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.25, 1)}
        className="relative w-full h-[550px] mt-16 flex"
      >
        <img
          src="/images/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>

  </section>
);

export default World;
