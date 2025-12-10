import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/hero-bg.png"
            alt="Data Network Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Supply Chain Intelligence. <br />
              <span style={{ color: 'var(--color-primary)' }}>Reimagined by Agents.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Stop relying on stale databases. Sentryian deploys autonomous AI agents to investigate, assess, and monitor your third-party risks in real-time.
            </p>
            <div className={styles.heroButtons}>
              <a href="#contact" className="btn-primary">Start Free Assessment</a>
              <a href="/about" className="btn-secondary">How it Works</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Sentryian?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Real-Time Agentic Intel</h3>
              <p className={styles.featureText}>
                Our AI agents don't just query old records—they actively investigate. They read news, check filings, and synthesize fresh data instantly.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>Deep Investigations</h3>
              <p className={styles.featureText}>
                Go beyond surface-level checks. Sentryian agents follow leads, cross-reference entities, and uncover hidden risks that others miss.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💎</div>
              <h3 className={styles.featureTitle}>Enterprise Grade, Mid-Market Price</h3>
              <p className={styles.featureText}>
                Finally, the power of elite intelligence firms is available to everyone. No massive retainers, just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className={styles.comparison}>
        <div className="container">
          <div className={styles.comparisonContent}>
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
                The Old Way vs. The Agentic Way
              </h2>
              <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                Traditional providers sell you data from last year. We generate intelligence for today.
              </p>
              <ul style={{ listStyle: 'none', spaceY: '1rem' }}>
                <li style={{ marginBottom: '10px' }}>❌ <strong>Incumbents:</strong> Static databases, manual updates, high cost.</li>
                <li style={{ marginBottom: '10px' }}>✅ <strong>Sentryian:</strong> AI Agents, instant verification, adaptive pricing.</li>
              </ul>
            </div>
            <div className={styles.comparisonImage}>
              <Image
                src="/ai-agent.png"
                alt="AI Agent Visualization"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
