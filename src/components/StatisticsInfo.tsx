"use client";

import {
  animate,
  motion,
  useMotionValue,
  useInView,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

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
  const countExhibitors = useMotionValue(0);
  const roundedDays = useTransform(countDays, Math.round);
  const roundedAttendees = useTransform(countAttendees, Math.round);
  const roundedSpeakers = useTransform(countSpeakers, Math.round);
  const roundedExhibitors = useTransform(countExhibitors, Math.round);

  useEffect(() => {
    let animateDays;
    let animateAttendees;
    let animateSpeakers;
    let animateExhibitors;
    if (isInView) {
      animateDays = animate(countDays, 3, { duration: 4.5 });
      animateAttendees = animate(countAttendees, 6000, {
        duration: 2,
        delay: 1,
      });
      animateSpeakers = animate(countSpeakers, 15, {
        duration: 2,
        delay: 1.5,
      });
      animateExhibitors = animate(countExhibitors, 150, {
        duration: 2,
        delay: 2,
      });
    }
    return (
      animateDays?.stop,
      animateAttendees?.stop,
      animateSpeakers?.stop,
      animateExhibitors?.stop
    );
  });

  return (
    <section
      ref={ref}
      className="flex flex-col gap-16 items-center justify-center py-16 w-full h-fit bg-expoBlue font-rubik"
    >
      <h2 className="font-bold text-2xl lg:text-4xl text-white w-[90%] xl:w-2/3 text-center">
        {`“Driving Local Empowerment through Procurement and Economic Inclusion”`}
      </h2>
      {/* Container */}
      <div className="flex items-center justify-center mx-auto w-[90%] xl:w-[80%] h-full text-[#F2F2F2] overflow-hidden">
        <motion.ul
          transition={{ staggerChildren: 0.4, delayChildren: 0.7 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-16 md:gap-8 w-full h-full items-center justify-center flex-col md:flex-row"
        >
          {/* Days */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <motion.p className="text-2xl lg:text-4xl font-bold">
              {roundedDays}
            </motion.p>
            Days
          </motion.li>
          {/* Attendees */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <div className="flex gap-2 text-2xl lg:text-4xl font-bold">
              <motion.p className="text-2xl lg:text-4xl font-bold text-white">
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
            <div className="flex gap-2 text-2xl lg:text-4xl font-bold">
              <motion.p className="text-2xl lg:text-4xl font-bold text-white">
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
          {/* Exhibitors */}
          <motion.li
            variants={fadeInAnimationVariants}
            className="text-2xl flex flex-col justify-center items-center gap-4"
          >
            <div className="flex gap-2 text-2xl lg:text-4xl font-bold">
              <motion.p className="text-2xl lg:text-4xl font-bold text-white">
                {roundedExhibitors}
              </motion.p>
              <motion.span
                variants={plusIconVariants}
                transition={{ delay: 4 }}
                initial="initial"
                animate="animate"
                className="text-expoOrange"
              >
                +
              </motion.span>
            </div>
            Exhibitors
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

export default StatisticsInfo;
