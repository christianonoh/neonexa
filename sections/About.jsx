'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '@/utils/motion';
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
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`mt-2 sm:text-3xl text-xl text-center text-secondary-white`}
      >
        <span className='font-extrabold text-white'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling 
        like it's really real, you can feel what you feel in this metaverse world, because this is 
        really the <span className='font-extrabold text-white'>madness of the metaverse</span> of today, using only <span className='font-extrabold text-white'>VR</span> devices you can easily explore 
        the metaverse world you want, turn your dreams into reality. Let's <span className='font-extrabold text-white'>explore</span> the madness of 
        the metaverse by scrolling down
      </motion.p>
      <motion.img
        src='/icons/arrow-down.svg'
        alt='arrow down'
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='h-7 w-5 mt-7 object-contain'
      />
    </motion.div>

  </section>
);

export default About;
