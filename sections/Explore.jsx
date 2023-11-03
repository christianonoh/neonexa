'use client';

import { ExploreCard, TitleText, TypingText } from "@/components";
import { exploreWorlds } from "@/constants";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col mx-auto`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />
      <div className="flex lg:flex-row flex-col  mt-12 min-h-[70vh] gap-5">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}

      </div>

    </motion.div>

  </section>
)};

export default Explore;
