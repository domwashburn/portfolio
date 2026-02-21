import { reader } from '@/lib/keystatic';
import styles from '../thoughts/page.module.scss';
import clsx from 'clsx';

export default async function Services() {
    const settings = await reader.singletons.settings.read();
    const services = settings?.services || [];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="text-display-md">Services.</h1>
                <p className={styles.subtitle}>Specialized disciplines offered for freelance engagements.</p>
            </header>

            <div className={styles.list}>
                {services.length === 0 ? (
                    <p className={styles.empty}>Services are currently being updated.</p>
                ) : (
                    services.map((service, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.gridCard}>
                                <div className={styles.metaCol}>
                                    <span className={styles.meta}>0{index + 1}</span>
                                </div>
                                <div className={styles.contentCol}>
                                    <h2 className={styles.postTitle}>{service.title}</h2>
                                    <p className={styles.summary}>{service.description}</p>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
