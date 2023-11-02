'use client';

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-secondary-white text-sm ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        key={index}
        variants={textVariant2}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    )
    )}
  </motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
