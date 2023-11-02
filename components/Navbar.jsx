'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '@/utils/motion';
import Image from 'next/image';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient_01" />

    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
      <Image
        src="/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className='object-contain'
      />
      <h2 className='text-2xl font-extrabold text-white'>
        NEONEXA
      </h2>
      <Image
        src="/icons/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className='object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
