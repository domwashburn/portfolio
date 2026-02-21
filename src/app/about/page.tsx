"use client";

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
    };

    return (
        <motion.div
            className={styles.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.grid}>

                {/* Left Column: Image */}
                <motion.div variants={itemVariants} className={clsx(styles.imageContainer, 'border-hairline-b')}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/dom-portrait.png"
                            alt="Dominick Washburn"
                            fill
                            className={styles.image}
                            priority
                        />
                    </div>
                    <div className={styles.caption}>
                        <span className={styles.captionLabel}>Fig 01.</span>
                        <span>Dominick Washburn</span>
                    </div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div variants={itemVariants} className={clsx(styles.content, 'border-hairline')}>
                    <h1 className="text-display-md">About.</h1>

                    <div className={styles.proseBlock}>
                        <p className="text-prose">
                            I’m a UX Engineer and Front End Developer blending the lines between design and engineering. Currently, I work for IBM on Master Data Management products in the Hybrid Cloud Design Org.
                        </p>
                        <p className="text-prose" style={{ marginTop: '1.5rem' }}>
                            My philosophy centers on the idea that an interface should be tough, reliable, and approachable. I strive for an aesthetic that is modern yet nostalgic, drawing inspiration from analogue editorial design while leveraging cutting-edge digital technologies.
                        </p>
                    </div>

                    <div className={styles.detailsGrid}>
                        <div className={styles.detailBlock}>
                            <h3 className={styles.detailLabel}>Discipline</h3>
                            <p className={styles.detailValue}>Design Engineering</p>
                            <p className={styles.detailValue}>UX/UI Architecture</p>
                            <p className={styles.detailValue}>Creative Development</p>
                        </div>

                        <div className={styles.detailBlock}>
                            <h3 className={styles.detailLabel}>Location</h3>
                            <p className={styles.detailValue}>Austin, TX</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    );
}
