"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const links = [
    { href: '/', label: 'Home', number: '01' },
    { href: '/about', label: 'About', number: '02' },
    { href: '/thoughts', label: 'Thoughts', number: '03' },
    { href: '/portfolio', label: 'Portfolio', number: '04' },
    { href: '/case-studies', label: 'Case Studies', number: '05' },
    { href: '/services', label: 'Services', number: '06' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
                        DOMINICK
                    </Link>
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className={styles.overlay}
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <div className={styles.overlayGrid}>
                            <div className={styles.infoCol}>
                                <div className={styles.overlayBrand}>DW. <br /> Portfolio</div>
                                <div className={styles.contactInfo}>
                                    <p>Available for freelance opportunities and full-time roles.</p>
                                    <a href="mailto:domwashburn@gmail.com" className={styles.email}>domwashburn@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.linksCol}>
                                {links.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={clsx(styles.link, pathname === link.href && styles.active)}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className={styles.linkNumber}>{link.number}</span>
                                            <span className={styles.linkLabel}>{link.label}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
