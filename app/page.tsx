import Link from 'next/link'

export default function Home() {
  return (
    <main className="landing-page">
      <header className="header">
        <div className="logo">🍎 Foody</div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Track Your Nutrition with AI</h1>
          <p className="hero-subtitle">
            Simply snap a photo of your meal and let AI-powered analysis track your calories and nutrition automatically
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">📸</span>
              <span>AI Food Recognition</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span>Smart Nutrition Tracking</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Personalized Goals</span>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Download on App Store</a>
            <a href="#" className="btn btn-secondary">Get it on Google Play</a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">1</div>
            <h3>Take a Photo</h3>
            <p>Snap a picture of your meal with your phone camera</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our AI identifies foods and calculates nutrition instantly</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">3</div>
            <h3>Track Progress</h3>
            <p>Monitor your daily intake and reach your health goals</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Foody</h2>
        <div className="about-content">
          <p>
            Foody uses advanced AI technology powered by Google Gemini to analyze your food photos
            and provide accurate nutritional information. Whether you're tracking calories,
            monitoring macros, or working toward health goals, Foody makes it simple and effortless.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Foody</h4>
            <p>AI-Powered Nutrition Tracking</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="mailto:support@foodyapp.com">support@foodyapp.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Foody. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
        }

        .header {
          padding: 20px 40px;
          border-bottom: 1px solid rgba(255, 107, 107, 0.2);
        }

        .logo {
          font-size: 24px;
          font-weight: 600;
          color: #FF6B6B;
        }

        .hero {
          padding: 80px 40px;
          text-align: center;
          background: linear-gradient(180deg, rgba(255, 107, 107, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          color: #FF6B6B;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .feature-icon {
          font-size: 24px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-block;
        }

        .btn-primary {
          background-color: #FF6B6B;
          color: #000000;
        }

        .btn-primary:hover {
          background-color: #ff5252;
          text-decoration: none;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid #FF6B6B;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 107, 107, 0.1);
          text-decoration: none;
          transform: translateY(-2px);
        }

        .features-section,
        .about-section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 40px;
          text-align: center;
          margin-bottom: 60px;
          color: #FF6B6B;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(255, 107, 107, 0.2);
          text-align: center;
          transition: all 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 107, 107, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }

        .feature-number {
          width: 60px;
          height: 60px;
          background: #FF6B6B;
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          margin: 0 auto 20px;
        }

        .feature-card h3 {
          font-size: 24px;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer {
          background: rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 107, 107, 0.2);
          padding: 60px 40px 20px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          color: #FF6B6B;
          margin-bottom: 15px;
          font-size: 18px;
        }

        .footer-section p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-links a:hover {
          color: #FF6B6B;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 107, 107, 0.1);
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .section-title {
            font-size: 32px;
          }

          .hero,
          .features-section,
          .about-section {
            padding: 40px 20px;
          }

          .footer {
            padding: 40px 20px 20px;
          }
        }
      `}</style>
    </main>
  )
}
