import { reader } from '@/lib/keystatic';
import styles from '../thoughts/page.module.scss';

export default async function Services() {
    const settings = await reader.singletons.settings.read();
    const services = settings?.services || [];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Services.</h1>
                <p className={styles.subtitle}>How we can collaborate together.</p>
            </header>

            <div className={styles.list}>
                {services.length === 0 ? (
                    <p className={styles.empty}>Services are currently being updated.</p>
                ) : (
                    services.map((service, index) => (
                        <article key={index} className={styles.card}>
                            <h2 className={styles.postTitle}>{service.title}</h2>
                            <p className={styles.summary} style={{ marginTop: '1rem' }}>{service.description}</p>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
