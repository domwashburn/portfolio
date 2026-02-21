"use client";

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
    };

    return (
        <motion.div
            className={styles.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.grid}>
                <motion.div variants={itemVariants} className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/dom-portrait.png"
                            alt="Dominick Washburn"
                            fill
                            className={styles.image}
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className={styles.content}>
                    <h1 className={styles.title}>About Me.</h1>
                    <p className={styles.paragraph}>
                        I’m a UX Engineer and Front End Developer blending the lines between design and engineering. Currently, I work for IBM on Master Data Management products in the Hybrid Cloud Design Org.
                    </p>
                    <p className={styles.paragraph}>
                        My philosophy centers on the idea that an interface should be tough, reliable, and approachable. I strive for an aesthetic that is modern yet nostalgic, drawing inspiration from analogue editorial design while leveraging cutting-edge digital technologies.
                    </p>
                    <div className={styles.details}>
                        <div className={styles.detailBlock}>
                            <h3 className={styles.detailLabel}>Focus</h3>
                            <p className={styles.detailValue}>Design Engineering, Design Systems, UX/UI, Creative Development</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
