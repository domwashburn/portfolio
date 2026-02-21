import { reader } from '@/lib/keystatic';
import styles from '../thoughts/page.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export default async function Portfolio() {
    const items = await reader.collections.portfolio.all();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="text-display-md">Portfolio.</h1>
                <p className={styles.subtitle}>Selected works across design and engineering.</p>
            </header>

            <div className={styles.list}>
                {items.length === 0 ? (
                    <p className={styles.empty}>Portfolio is currently being updated.</p>
                ) : (
                    items.map(item => (
                        <article key={item.slug} className={styles.card}>
                            <Link href={item.entry.link || `#`} className={styles.link} target="_blank" rel="noopener noreferrer">
                                <div className={styles.metaCol}>
                                    <span className={styles.meta}>{item.entry.category}</span>
                                </div>
                                <div className={styles.contentCol}>
                                    <h2 className={styles.postTitle}>{item.entry.title}</h2>
                                    <span className={styles.readMore}>View Project</span>
                                </div>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
