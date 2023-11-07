'use client';

import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import MapImg from "/public/images/map.png"
import People1 from "/public/images/people-01.png"
import People2 from "/public/images/people-02.png"
import People3 from "/public/images/people-03.png"
import World1 from "/public/images/world-1.png"
import World2 from "/public/images/world-2.png"
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
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
        <Image
          src={MapImg}
          alt="map"
          className="w-full h-full object-cover"
        />


        <div className="absolute lg:bottom-28 bottom-1/2 right-[12%] bg-[#5d6680] rounded-full w-[70px] h-[70px] p-1.5">
          <Image src={People1} alt="people" />
        </div>

        <div className="absolute bottom-64 right-1/2 bg-[#5d6680] rounded-full w-[70px] h-[70px] p-1.5">
          <Image src={People2} alt="people" />
        </div>

        <div className="absolute top-10 left-32 bg-[#5d6680] rounded-full w-[70px] h-[70px] p-1.5">
          <Image src={People3} alt="people" />
        </div>

        <div className="absolute top-[50px] right-[19%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] invisible md:visible">
          <Image
            src={World2}
            alt="world"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-[24px] p-4">
            <div className="h-[24px] w-auto flex relative">
              <Image
                src={People2}
                alt="people"
                className="w-[24px] h-[24px] rounded-full"
              />
              <Image
                src={People1}
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
              />
              <Image
                src={People3}
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
              />
              <h5 className="h-[24px] text-left text-[10px] p-1 text-white bg-[#5d66804a]">+ 264 has joined</h5>
            </div>
            <h3 className="text-white font-bold">Hawkins Labs</h3>
          </div>
        </div>

        <div className="absolute top-72 left-[10%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] invisible md:visible">
          <Image
            src={World1}
            alt="world"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-[24px] p-4">
            <div className="h-[24px] w-auto flex relative">
              <Image
                src={People2}
                alt="people"
                className="w-[24px] h-[24px] rounded-full"
              />
              <Image
                src={People1}
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
              />
              <Image
                src={People3}
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
              />
              <h5 className="h-[24px] text-left text-[10px] p-1 text-white bg-[#5d66804a]">+ 264 has joined</h5>
            </div>
            <h3 className="text-white font-bold">The Upside Down</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>

  </section>
);

export default World;
