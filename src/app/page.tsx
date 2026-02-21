"use client";

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.grid}>

        {/* Main Display Headline Area */}
        <motion.div variants={itemVariants} className={clsx(styles.headlineCol, 'border-hairline-b')}>
          <h1 className="text-display-lg">
            Analogue <br />
            <span className={styles.italic}>meets </span> Digital.
          </h1>
          <div className={styles.stamp}>Est. 2017</div>
        </motion.div>

        {/* Content & Actions Grid */}
        <div className={styles.lowerGrid}>

          <motion.div variants={itemVariants} className={clsx(styles.introCol, 'border-hairline')}>
            <p className="text-prose">
              Hey there, I'm <strong className={styles.strongText}>Dominick.</strong><br /><br />
              I'm a UI Engineer and Front End Developer operating at the intersection of studio-art, graphic design, and interactive architecture. Let's create experiences that are tough yet approachable.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={clsx(styles.quoteCol, 'border-hairline')}>
            <h2 className={styles.quoteTitle}>Philosphy</h2>
            <p className={styles.quoteText}>
              "Beautiful web design is more than pixel deep. Code is an artistic medium; architecture should be as polished as the interface it creates."
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={clsx(styles.actionCol, 'border-hairline')}>
            <Link href="/portfolio" className={styles.primaryLink}>
              Selected Works <span className={styles.arrow}>→</span>
            </Link>
            <Link href="/about" className={styles.secondaryLink}>
              About Dominick
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
