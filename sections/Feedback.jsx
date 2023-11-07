'use client';
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Planet9 from '/public/images/planet-09.png'
import Stamp from '/public/images/stamp.png'
import Image from "next/image";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col gap-6 mx-auto`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.8)}
        className="sm:p-8 p-4 flex flex-col flex-[0.5] gradient-05
         rounded-3xl max-w-[370px] text-white justify-end border
          border-[#6a6a6a] relative"
      >
        <div className="feedback_gradient" />
        <div>
          <h4 className=" font-bold text-3xl">
              Samantha
            </h4>
            <p className="text-lg font-normal mt-1">
              Founder NeoNexa
            </p>
        </div>
        <p className="text-2xl leading-10 mt-6">
        “With the development of today's technology, metaverse is very
         useful for today's work, or can be called web 3.0. by using metaverse
          you can use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.8)}
        className={`relative flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={Planet9}
          alt="planet 09"
          placeholder="blur"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-3xl"
        />

        <motion.div
          variants={zoomIn(0.3, 1)}
          className="absolute -left-[10%] top-[7%] lg:block hidden z-10"
        >
          <Image
            src={Stamp}
            alt="stamp"
            className="w-[155px] h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
