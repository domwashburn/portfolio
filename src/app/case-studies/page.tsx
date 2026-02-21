import { reader } from '@/lib/keystatic';
import styles from '../thoughts/page.module.scss';
import Link from 'next/link';

export default async function CaseStudies() {
    const studies = await reader.collections.caseStudies.all();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Case Studies.</h1>
                <p className={styles.subtitle}>Deep dives into process, challenges, and solutions.</p>
            </header>

            <div className={styles.list}>
                {studies.length === 0 ? (
                    <p className={styles.empty}>Case studies are being documented.</p>
                ) : (
                    studies.map(study => (
                        <article key={study.slug} className={styles.card}>
                            <Link href={`/case-studies/${study.slug}`} className={styles.link}>
                                <div className={styles.meta}>
                                    <time>{study.entry.date}</time> &mdash; <span>{study.entry.client}</span>
                                </div>
                                <h2 className={styles.postTitle}>{study.entry.title}</h2>
                                <p className={styles.summary}>{study.entry.summary}</p>
                                <span className={styles.readMore}>Read Case Study</span>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
