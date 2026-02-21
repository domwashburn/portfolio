import { reader } from '@/lib/keystatic';
import styles from './page.module.scss';
import Link from 'next/link';

export default async function Thoughts() {
    const posts = await reader.collections.posts.all();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Thoughts.</h1>
                <p className={styles.subtitle}>Writings on design, engineering, and the spaces in between.</p>
            </header>

            <div className={styles.list}>
                {posts.length === 0 ? (
                    <p className={styles.empty}>No thoughts published yet. Check back soon.</p>
                ) : (
                    posts.map(post => (
                        <article key={post.slug} className={styles.card}>
                            <Link href={`/thoughts/${post.slug}`} className={styles.link}>
                                <div className={styles.meta}>
                                    <time>{post.entry.date}</time>
                                </div>
                                <h2 className={styles.postTitle}>{post.entry.title}</h2>
                                <p className={styles.summary}>{post.entry.summary}</p>
                                <span className={styles.readMore}>Read Article</span>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
