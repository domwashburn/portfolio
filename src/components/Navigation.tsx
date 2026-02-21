"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/thoughts', label: 'Thoughts' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/services', label: 'Services' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.brand}>
                    DOMINICK
                </Link>
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(styles.link, pathname === link.href && styles.active)}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className={styles.indicator}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
