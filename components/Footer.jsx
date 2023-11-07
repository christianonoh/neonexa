'use client';

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { socials } from "@/constants";
import Headset from '/public/icons/headset.svg'
import Image from "next/image";
import Twitter from '/public/icons/twitter.svg'
import LinkedIn from '/public/icons/linkedin.svg'
import IG from '/public/icons/instagram.svg'
import Facebook from '/public/icons/facebook.svg'

const imgArr = [Twitter, LinkedIn, IG, Facebook];

const Footer = () => (
  <footer className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="footer_gradient relative" />
      <motion.div
        variants={fadeIn('right', 'tween', 0.25, 1)}
        className="flex justify-between"
      >
        <h3 className="mt-2 lg:text-6xl text-2xl text-white font-bold">
          Enter the Metaverse
        </h3> 
        <div className={`${styles.flexCenter} flex gap-2 bg-[#25618B] px-4 rounded-3xl`}>
          <Image
            src={Headset}
            className="w-6 h-6"
            alt="headset" />
          <p className="uppercase text-white font-thin text-xs">Enter metaverse</p>
        </div>
      </motion.div>

      <div className="mt-8 md:pt-12 pt-6 border-t-[1px] flex md:flex-row flex-col justify-between items-center">
        <p className="font-extrabold text-white text-2xl uppercase">
          neonexa
        </p>

        <p className="text-center text-sm text-white opacity-50 my-4">
              <a
                href="https://github.com/christianonoh"
                target="_blank"
                rel="noreferrer noopener"
              >
                Developed by <span className="text-green-400">Christian Onoh</span>
              </a>
              <br className="lg:hidden block" />
              <span className="lg:inline hidden">{'  |  '}</span>
              All rights reserved &copy; {new Date().getFullYear()}

        </p>

        <div className="flex gap-4">
          {socials.map((social, index) => (
            <Image 
              key={social.name}
              src={imgArr[index]}
              alt={social.name}
              className="w-[20px] h-[20px]"
            />
          ))}
        </div>
      </div>

    </motion.div>
  </footer>
);

export default Footer;
