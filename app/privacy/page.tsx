'use client'

import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="legal-page">
      <header className="header">
        <Link href="/" className="logo">🍎 Foody</Link>
      </header>

      <main className="legal-content">
        <div className="container">
          <h1>🍎 Foody Privacy Policy</h1>
          <div className="last-updated">
            📅 Last Updated: October 22, 2025
          </div>

          <div className="intro">
            <p>Your privacy is important to us. This Privacy Policy explains how Foody ("we", "us", or "our") collects, uses, shares, and protects your personal information when you use our mobile application.</p>
            <p>By using Foody, you agree to the collection and use of information in accordance with this policy.</p>
          </div>

          <section>
            <h2>1. Information We Collect</h2>
            <p><strong>1.1 Information You Provide:</strong></p>
            <ul>
              <li><strong>Account Information:</strong> When you sign in with Google, we collect your name, email address, and profile picture from your Google account.</li>
              <li><strong>Profile Data:</strong> Age, gender, weight, height, activity level, and weight goals that you provide during onboarding.</li>
              <li><strong>Food Data:</strong> Photos of meals you upload and nutritional information from our analysis.</li>
              <li><strong>Health Metrics:</strong> Daily calorie intake, macronutrient breakdown, and progress tracking data.</li>
            </ul>

            <p><strong>1.2 Automatically Collected Information:</strong></p>
            <ul>
              <li><strong>Device Information:</strong> Device type, operating system, and app version.</li>
              <li><strong>Usage Data:</strong> App interactions, features used, and session duration.</li>
              <li><strong>Log Data:</strong> Error logs and crash reports to improve app stability.</li>
            </ul>

            <p><strong>1.3 Information from Third Parties:</strong></p>
            <ul>
              <li><strong>Google Sign-In:</strong> We receive basic profile information from Google OAuth when you sign in.</li>
              <li><strong>Firebase Services:</strong> Authentication and cloud messaging services provided by Google Firebase.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain the Foody service</li>
              <li>Calculate personalized calorie and nutrition recommendations</li>
              <li>Analyze food images using Google Gemini API to provide nutritional information</li>
              <li>Track your daily nutrition and progress toward goals</li>
              <li>Send you important notifications about your nutrition tracking</li>
              <li>Improve app performance and fix bugs</li>
              <li>Respond to your support requests</li>
              <li>Comply with legal obligations</li>
            </ul>

            <p><strong>Image Processing:</strong></p>
            <p>When you upload a food image, it is sent to Google's Gemini API for AI-powered nutritional analysis. The image is processed to extract information about food items, portion sizes, and nutritional content. We do not store your images permanently on Google's servers - they are only used for real-time analysis.</p>

            <p><strong>We do NOT:</strong></p>
            <ul>
              <li>Sell your personal information to third parties</li>
              <li>Share your data for advertising purposes</li>
              <li>Use your food photos for any purpose other than providing you nutritional analysis</li>
              <li>Train AI models on your food images without explicit consent</li>
              <li>Store your images on Google's servers after analysis is complete</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Storage and Security</h2>
            <ul>
              <li>Your data is stored securely on Google Firebase servers with industry-standard encryption</li>
              <li>Local data on your device is stored in encrypted databases</li>
              <li>We implement appropriate security measures to protect against unauthorized access</li>
              <li>Regular security audits and updates are performed</li>
              <li>Data is transmitted using secure HTTPS connections</li>
              <li>We retain your data only as long as necessary to provide our services</li>
            </ul>
          </section>

          <section>
            <h2>4. Your Privacy Rights</h2>
            <p><strong>4.1 GDPR Rights (EU Users):</strong></p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
            </ul>

            <p><strong>4.2 CCPA Rights (California Users):</strong></p>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to say no to the sale of personal information</li>
              <li>Right to access your personal information</li>
              <li>Right to equal service and price</li>
              <li>Right to request deletion of your personal information</li>
            </ul>

            <p><strong>4.3 How to Exercise Your Rights:</strong></p>
            <p>To exercise any of these rights, please contact us at: <a href="mailto:support@foodyapp.com">support@foodyapp.com</a></p>
            <p>We will respond to your request within 30 days.</p>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Google Services:</strong> Your food images are sent to Google Gemini API for nutritional analysis. Google Firebase is used for authentication and data storage.</li>
              <li><strong>AWS Lambda:</strong> For cloud computing and serverless functions</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets (you will be notified)</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>

            <p><strong>Important Note About Google Gemini API:</strong></p>
            <p>When you take or upload a food photo, that image is transmitted to Google's Gemini API for AI-powered analysis. Google processes the image to identify food items and estimate nutritional information. This processing is essential for the core functionality of Foody. By using the app, you consent to this data sharing with Google for analysis purposes only.</p>

            <p>We do NOT share your personal information for marketing purposes.</p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
            <p><strong>Email:</strong> <a href="mailto:support@foodyapp.com">support@foodyapp.com</a><br />
            <strong>Response Time:</strong> Within 48 hours</p>

            <p><strong>For GDPR-related inquiries (EU users):</strong><br />
            Email: <a href="mailto:gdpr@foodyapp.com">gdpr@foodyapp.com</a></p>

            <p><strong>For CCPA-related inquiries (California users):</strong><br />
            Email: <a href="mailto:privacy@foodyapp.com">privacy@foodyapp.com</a></p>
          </section>

          <div className="footer-note">
            <div className="footer-icon">🔒</div>
            <h3>Your data is protected</h3>
            <p>We are committed to protecting your privacy and handling your data with care and transparency.</p>
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

        .footer-note {
          background: rgba(255, 255, 255, 0.05);
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
