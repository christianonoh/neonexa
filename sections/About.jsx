'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import ArrowDown from '/public/icons/arrow-down.svg'
import { fadeIn, staggerContainer } from '@/utils/motion';
import { TypingText } from '@/components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient_02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col mx-auto`}
    >
      <TypingText title="| About Metaverse" textStyles="text-center" />

      <motion.p
        variants={fadeIn('right', 'tween', 0.1, 0.8)}
        className={`mt-2 sm:text-3xl text-xl text-center text-secondary-white`}
      >
        <span className='font-extrabold text-white'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling 
        like it's really real, you can feel what you feel in this metaverse world, because this is 
        really the <span className='font-extrabold text-white'>madness of the metaverse</span> of today, using only <span className='font-extrabold text-white'>VR</span> devices you can easily explore 
        the metaverse world you want, turn your dreams into reality. Let's <span className='font-extrabold text-white'>explore</span> the madness of 
        the metaverse by scrolling down
      </motion.p>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 0.8)}>
        <Image
          src={ArrowDown}
          alt='arrow down'
          className='h-7 w-5 mt-7 object-contain'
        />
      </motion.div>
    </motion.div>

  </section>
);

export default About;
