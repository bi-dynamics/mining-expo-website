"use client";

import {
  animate,
  motion,
  useMotionValue,
  useInView,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeInAnimationVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

const plusIconVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function StatisticsInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const countDays = useMotionValue(0);
  const countAttendees = useMotionValue(0);
  const countSpeakers = useMotionValue(0);
  const roundedDays = useTransform(countDays, Math.round);
  const roundedAttendees = useTransform(countAttendees, Math.round);
  const roundedSpeakers = useTransform(countSpeakers, Math.round);
  useEffect(() => {
    let animateDays;
    let animateAttendees;
    let animateSpeakers;
    if (isInView) {
      animateDays = animate(countDays, 2, { duration: 4.5 });
      animateAttendees = animate(countAttendees, 500, {
        duration: 2,
        delay: 1,
      });
      animateSpeakers = animate(countSpeakers, 15, {
        duration: 2,
        delay: 1.5,
      });
    }
    return animateDays?.stop, animateAttendees?.stop, animateSpeakers?.stop;
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-16 items-center justify-center pb-16 w-full h-fit bg-expoBlue font-rubik"
    >
      <h2 className="font-bold text-4xl text-white w-1/2 text-center">
        "Namibia’s role in the sustainable supply of minerals to support the
        global energy transition"
      </h2>
      {/* Container */}
      <div className="flex flex-wrap items-center justify-center mx-auto w-[80%] h-full text-[#F2F2F2] overflow-hidden">
        <motion.ul
          transition={{ staggerChildren: 0.4, delayChildren: 0.7 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-8 w-full h-full items-center justify-center"
        >
          {/* Days */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <motion.p className="text-4xl font-bold">{roundedDays}</motion.p>
            Days
          </motion.li>
          {/* Attendees */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <div className="flex gap-2 text-4xl font-bold">
              <motion.p className="text-4xl font-bold text-white">
                {roundedAttendees}
              </motion.p>
              <motion.span
                variants={plusIconVariants}
                transition={{ delay: 2.5 }}
                initial="initial"
                animate="animate"
                className="text-expoOrange"
              >
                +
              </motion.span>
            </div>
            Attendees
          </motion.li>
          {/* Speakers */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <div className="flex gap-2 text-4xl font-bold">
              <motion.p className="text-4xl font-bold text-white">
                {roundedSpeakers}
              </motion.p>
              <motion.span
                variants={plusIconVariants}
                transition={{ delay: 3 }}
                initial="initial"
                animate="animate"
                className="text-expoOrange"
              >
                +
              </motion.span>
            </div>
            Speakers
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

export default StatisticsInfo;
