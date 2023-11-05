'use client';

import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const ExploreCard = ({ index, active, handleClick, id, imgUrl, title }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' :
    'lg:flex-[0.5] flex-[2]'} flex justify-center items-center min-w-[170px] 
    h-[700px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={imgUrl}
      alt={title}
      className='absolute object-cover w-full h-full rounded-3xl'
    />
    {active !== id ? (
      <h3 className="absolute text-white font-bold sm:text-2xl text-lg
       lg:-rotate-90 lg:bottom-20 lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 bg_black_05 w-full rounded-b-3xl
       flex-col justify-start">
        <div className={`glassmorphism rounded-2xl w-[60px] h-[60px] ${styles.flexCenter}`}>
          <img src="/icons/headset.svg" alt="headset" className="object-contain w-1/2 h-1/2"/>
        </div>
        <p className="text-white text-base font-normal uppercase mt-2">
          Enter Metaverse
        </p>
        <p className="uppercase font-semibold sm:text-3xl text-2xl text-white lg:mt-8 mt-4">
          {title}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
