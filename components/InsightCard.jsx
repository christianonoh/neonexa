'use client';

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Planet6 from '/public/images/planet-06.png'
import Planet7 from '/public/images/planet-07.png'
import Planet8 from '/public/images/planet-08.png'
import Arrow from '/public/icons/arrow.svg'
import Image from "next/image";

const imgArr = [Planet6, Planet7, Planet8];

const InsightCard = ({ title, subtitle, imgUrl, number }) => (
  <motion.div
    variants={fadeIn('right', 'tween', 0.3 * number, 0.5)}
    className="flex mt-8 md:flex-row flex-col gap-4 cursor-pointer"
  >
    <Image
      src={imgArr[number-1]}
      alt={title}
      placeholder="blur"
      sizes="(max-width: 767px) 100vw, 270px)"
      className="md:w-[270px] w-full h-[250px] object-cover rounded-3xl"
    />
    <div className="flex justify-between w-full items-center">
      <div className="max-w-2xl md:ml-14 flex flex-col flex-1">
        <h4 className="lg:text-5xl text-2xl font-normal text-white">
          {title}
        </h4>
        <p className="lg:text-xl text-base mt-4 text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden border rounded-full w-[100px] h-[100px] justify-center items-center border-1 bg-transparent">
        <Image
          src={Arrow}
          alt="arrow"
          className="w-2/5 h-2/5 object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
