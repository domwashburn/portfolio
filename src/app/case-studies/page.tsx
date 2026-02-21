import { reader } from '@/lib/keystatic';
import styles from '../thoughts/page.module.scss';
import Link from 'next/link';

export default async function CaseStudies() {
    const caseStudies = await reader.collections.caseStudies.all();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="text-display-md">Case Studies.</h1>
                <p className={styles.subtitle}>Deep dives into full-scale product design and engineering architectures.</p>
            </header>

            <div className={styles.list}>
                {caseStudies.length === 0 ? (
                    <p className={styles.empty}>No case studies published yet.</p>
                ) : (
                    caseStudies.map(study => (
                        <article key={study.slug} className={styles.card}>
                            <Link href={`/case-studies/${study.slug}`} className={styles.link}>
                                <div className={styles.metaCol}>
                                    <span className={styles.meta}>{study.entry.client} • {study.entry.date}</span>
                                </div>
                                <div className={styles.contentCol}>
                                    <h2 className={styles.postTitle}>{study.entry.title}</h2>
                                    <p className={styles.summary}>{study.entry.summary}</p>
                                    <span className={styles.readMore}>Read Study</span>
                                </div>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
