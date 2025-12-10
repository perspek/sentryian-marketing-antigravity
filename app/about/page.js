import styles from "./page.module.css";

export default function About() {
    return (
        <div className={`container ${styles.aboutPage}`}>

            <section className={styles.hero}>
                <h1 className={styles.title}>Our Mission</h1>
                <p className={styles.subtitle}>
                    To democratize enterprise-grade supply chain intelligence through the power of autonomous AI agents.
                </p>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.textBlock}>
                    <h2>Why Sentryian?</h2>
                    <p>
                        The world of supply chain risk management has long been dominated by expensive giants relying on static, stale databases.
                        Small and mid-market companies were left with a choice: pay exorbitant fees for outdated reports, or fly blind.
                    </p>
                    <p>
                        Sentryian changes that. By leveraging advanced AI agents, we can conduct live, deep-dive investigations into any entity
                        on the planet, instantly and affordably.
                    </p>
                </div>
                <div className={styles.visualBlock}>
                    {/* Placeholder for future visual or team photo */}
                    <div style={{
                        width: '100%',
                        height: '300px',
                        background: 'var(--gradient-card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                    }}>
                        [Agent Network Visual]
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div style={{ width: '100%' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Core Values</h2>
                    <div className={styles.values}>
                        <div className={styles.valueCard}>
                            <h3>Truth, Fast.</h3>
                            <p>We prioritize speed and accuracy. Old data is bad data.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Agentic First</h3>
                            <p>We believe AI agents are the future of investigation, capable of reasoning and following leads.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Accessible Security</h3>
                            <p>Intelligence shouldn't be a luxury. We price for the mid-market.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
