"use client";

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.hero}>
        <motion.h1 variants={itemVariants} className={styles.headline}>
          Analogue <br />
          <span className={styles.italic}>meets</span> digital.
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.content}>
          <p className={styles.intro}>
            Hey there, I'm <strong className={styles.strong}>Dominick.</strong><br />
            I'm a UX Engineer and Front End Developer crafting experiences that are tough yet approachable, modern yet nostalgic.
          </p>

          <p className={styles.quote}>
            "I believe that beautiful web design is more than pixel deep, so I craft code and architecture as polished as the interfaces I’m creating."
          </p>

          <div className={styles.actions}>
            <Link href="/portfolio" className={styles.primaryButton}>
              View Work
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              More About Me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
