'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '@/utils/motion';
import Image from 'next/image';
import CoverImage from '/public/images/cover.png'
import Stamp from '/public/images/stamp.png'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center z-10 flex-col items-center">
        <motion.h1
          variants={textVariant(0.9)}
          className={`${styles.heroHeading}`}
        >
          METAVERSE
        </motion.h1>
        <motion.div
          variants={textVariant(1)}
          className='flex flex-row items-center justify-center'
        >
          <h1 className={styles.heroHeading}>
            MA
          </h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>
            NESS
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.1, 0.8)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero_gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src={CoverImage}
          placeholder='blur'
          alt="cover"
          className='w-full sm:h-[500px] h-[300px] object-cover relative z-10 rounded-tl-[140px]'
        />
        <a href="#explore">
          <div className='z-10 flex justify-end sm:-mt-[70px] -mt-[50px] relative pr-[40px]'>
            <Image
              src={Stamp}
              alt="stamp"
              className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
            />
          </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
