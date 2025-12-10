import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sentryian | AI-Powered Supply Chain Intelligence",
  description: "Advanced agentic assessments and investigations for modern supply chains. Fresh data, AI-driven insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <header className="site-header">
          <div className="container header-content">
            <div className="logo">
              <span className="logo-icon">◉</span> Sentryian
            </div>
            <nav className="main-nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              <a href="#contact" className="btn-secondary nav-btn">Get Started</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h3>Sentryian</h3>
                <p>Supply chain intelligence for the modern era.</p>
              </div>
              <div className="footer-col">
                <h4>Platform</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/about">About</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Sentryian. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
