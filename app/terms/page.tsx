import Link from 'next/link'

export default function Terms() {
  return (
    <div className="legal-page">
      <header className="header">
        <Link href="/" className="logo">🍎 Foody</Link>
      </header>

      <main className="legal-content">
        <div className="container">
          <h1>⚖️ Foody Terms of Service</h1>
          <div className="last-updated">
            📅 Last Updated: October 22, 2025
          </div>

          <div className="intro">
            <p>Welcome to Foody! These Terms of Service ("Terms") govern your use of the Foody mobile application and services. Please read them carefully.</p>
            <p>By creating an account or using our App, you agree to these Terms. If you do not agree, please do not use our App.</p>
          </div>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Foody mobile application ("App", "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.</p>
            <p>These Terms constitute a legally binding agreement between you and Foody. Your use of the App is also governed by our Privacy Policy.</p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>You must be at least 13 years old to use Foody. By using the App, you represent and warrant that:</p>
            <ul>
              <li>You are at least 13 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will comply with these Terms and all applicable laws and regulations</li>
              <li>All information you provide is accurate and current</li>
            </ul>
            <p>If you are under 18, you confirm that you have obtained parental or guardian consent to use this App.</p>
          </section>

          <section>
            <h2>3. Description of Service</h2>
            <p>Foody provides:</p>
            <ul>
              <li>AI-powered food image analysis using Google Gemini API for calorie tracking</li>
              <li>Personalized nutrition recommendations based on your profile</li>
              <li>Daily calorie and macronutrient tracking</li>
              <li>Progress monitoring toward your health goals</li>
              <li>Barcode scanning for packaged foods</li>
              <li>Push notifications for nutrition reminders</li>
            </ul>

            <p><strong>Technical Implementation:</strong></p>
            <p>The App uses Google's Gemini AI model (Gemini 2.5 Flash Lite) to analyze food images. When you take or upload a photo of food, the image is sent to Google's servers for processing. The AI identifies food items, estimates portions, and calculates nutritional information.</p>

            <p>The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue any part of the Service at any time.</p>
          </section>

          <section>
            <h2>4. User Account and Registration</h2>
            <p><strong>4.1 Account Creation:</strong></p>
            <ul>
              <li>You must create an account using Google Sign-In</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
            </ul>

            <p><strong>4.2 Account Information:</strong></p>
            <ul>
              <li>You agree to provide accurate, current, and complete information</li>
              <li>You agree to update your information to keep it accurate</li>
              <li>We reserve the right to suspend or terminate accounts with false information</li>
            </ul>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use the App for any illegal purpose or in violation of any laws</li>
              <li>Upload content that is offensive, harmful, or inappropriate</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Use automated systems (bots, scrapers) to access the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove or modify any copyright, trademark, or proprietary notices</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Upload viruses or malicious code</li>
            </ul>
            <p>Violation of these terms may result in immediate account termination.</p>
          </section>

          <section>
            <h2>6. User Content</h2>
            <p><strong>6.1 Content You Provide:</strong></p>
            <ul>
              <li>You retain ownership of photos and data you upload</li>
              <li>You grant us a license to use your content to provide the Service (e.g., analyze food images via Google Gemini API)</li>
              <li>We do not claim ownership of your personal content</li>
              <li>You can delete your content at any time from the App</li>
            </ul>

            <p><strong>6.2 Google Gemini API Processing:</strong></p>
            <ul>
              <li>Your food images are transmitted to Google's servers for AI processing</li>
              <li>Google processes the images according to their Gemini API Terms</li>
              <li>Images are used only for real-time nutritional analysis</li>
              <li>We do not permanently store your images on Google's servers</li>
              <li>Google's data handling is governed by their privacy policy</li>
            </ul>
          </section>

          <section>
            <h2>7. Nutritional Information Disclaimer</h2>
            <div className="disclaimer">
              <strong>IMPORTANT MEDICAL DISCLAIMER:</strong>
              <ul>
                <li>Foody provides nutritional information for educational purposes only</li>
                <li>Information is NOT medical advice and should not replace professional consultation</li>
                <li>Nutritional data is AI-generated and may contain errors or inaccuracies</li>
                <li>Always verify nutritional information, especially for dietary restrictions or allergies</li>
                <li>Consult healthcare professionals before making significant dietary changes</li>
                <li>We are not liable for health consequences from relying on our nutritional data</li>
                <li>This App is not intended to diagnose, treat, cure, or prevent any disease</li>
              </ul>
              <p><strong>By using Foody, you acknowledge these limitations and agree to use the information at your own risk.</strong></p>
            </div>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>The App integrates with third-party services:</p>
            <ul>
              <li>Google Sign-In for authentication</li>
              <li>Google Firebase for data storage and messaging</li>
              <li>AWS Lambda for cloud computing and serverless functions</li>
              <li>Google Gemini API (Gemini 2.5 Flash Lite model) for AI-powered nutritional analysis</li>
            </ul>

            <p><strong>Important - Google Gemini API Usage:</strong></p>
            <p>When you upload or capture a food image in Foody, that image is sent to Google's Gemini API for processing. The API analyzes the image to identify food items and estimate nutritional information. This is a core feature of the App and cannot be disabled.</p>

            <p>By using Foody, you also agree to:</p>
            <ul>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
              <li><a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">Google Gemini API Terms of Service</a></li>
              <li><a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer">Firebase Terms of Service</a></li>
            </ul>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul>
              <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>We are not liable for loss of profits, revenue, data, or use</li>
              <li>We are not liable for health consequences from using nutritional information</li>
              <li>Our total liability shall not exceed the amount you paid us (if any) in the past 12 months</li>
            </ul>
            <p>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.</p>
          </section>

          <section>
            <h2>10. Privacy and Data Protection</h2>
            <p>Your use of the App is also governed by our <Link href="/privacy">Privacy Policy</Link>, which describes how we collect, use, and protect your personal information. By using the App, you consent to our data practices as described in the Privacy Policy.</p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p><strong>Your Rights:</strong></p>
            <ul>
              <li>You may stop using the App at any time</li>
              <li>You may delete your account through the App settings</li>
            </ul>

            <p><strong>Our Rights:</strong></p>
            <p>We may suspend or terminate your access if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>You engage in fraudulent or illegal activities</li>
              <li>Required by law</li>
              <li>We discontinue the Service</li>
            </ul>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <p><strong>Email:</strong> <a href="mailto:support@foodyapp.com">support@foodyapp.com</a><br />
            <strong>Response Time:</strong> Within 48 hours</p>

            <p><strong>For legal inquiries:</strong><br />
            Email: <a href="mailto:legal@foodyapp.com">legal@foodyapp.com</a></p>
          </section>

          <section>
            <h2>13. Acknowledgment</h2>
            <p><strong>BY USING THE FOODY APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</strong></p>
          </section>

          <div className="footer-note">
            <div className="footer-icon">⚖️</div>
            <h3>Thank you for using Foody!</h3>
            <p>We are committed to providing you with the best nutrition tracking experience while protecting your rights and ensuring transparency.</p>
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <Link href="/">← Back to Home</Link>
      </footer>

      <style jsx>{`
        .legal-page {
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

        .legal-content {
          padding: 60px 20px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          font-size: 36px;
          color: #FF6B6B;
          margin-bottom: 10px;
          text-align: center;
        }

        .last-updated {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          border-radius: 8px;
          padding: 12px 20px;
          display: inline-block;
          margin: 20px auto 40px;
          font-size: 14px;
          color: #FF6B6B;
          display: block;
          text-align: center;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .intro {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.8;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          color: #FF6B6B;
          font-size: 24px;
          margin-bottom: 15px;
          padding-top: 10px;
        }

        p {
          margin-bottom: 15px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }

        ul {
          margin-left: 20px;
          margin-bottom: 15px;
        }

        li {
          margin-bottom: 8px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }

        .disclaimer {
          background: rgba(255, 107, 107, 0.15);
          border: 2px solid #FF6B6B;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }

        .disclaimer strong {
          color: #FF6B6B;
          display: block;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .footer-note {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 107, 107, 0.2);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          margin-top: 40px;
        }

        .footer-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .footer-note h3 {
          color: #ffffff;
          margin-bottom: 10px;
        }

        .footer-note p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .page-footer {
          padding: 40px;
          text-align: center;
          border-top: 1px solid rgba(255, 107, 107, 0.2);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 28px;
          }

          .legal-content {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  )
}
