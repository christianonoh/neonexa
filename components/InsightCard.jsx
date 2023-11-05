'use client';

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const InsightCard = ({ title, subtitle, imgUrl, number }) => (
  <motion.div
    variants={fadeIn('right', 'tween', 0.5 * number, 0.5)}
    className="flex mt-8 md:flex-row flex-col gap-4 cursor-pointer"
  >
    <img
      src={imgUrl}
      alt={title}
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
        <img
          src="/icons/arrow.svg"
          alt="arrow"
          className="w-2/5 h-2/5 object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
