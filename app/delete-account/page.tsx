'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DeleteAccount() {
  return (
    <div className="legal-page">
      <header className="header">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Foody Logo" width={32} height={32} />
          <span>Foody</span>
        </Link>
      </header>

      <main className="legal-content">
        <div className="container">
          <h1>Account & Data Deletion</h1>
          <div className="last-updated">
            Last Updated: October 24, 2025
          </div>

          <div className="intro">
            <p>At Foody, we respect your right to delete your account and associated data. This page explains how to request account deletion and what data will be removed or retained.</p>
          </div>

          <section>
            <h2>How to Delete Your Account</h2>
            <p>You can delete your Foody account in two ways:</p>

            <div className="methods-intro">
              <div className="method-card primary">
                <h3>Method 1: In-App Deletion (Recommended)</h3>
                <p>Quick and instant - Delete directly from the app</p>
              </div>
              <div className="method-card">
                <h3>Method 2: Email Request</h3>
                <p>If you don't have access to the app</p>
              </div>
            </div>

            <h3 className="method-title">Method 1: In-App Deletion (Recommended)</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Open Foody App</h3>
                  <p>Launch the Foody app on your device and make sure you're logged in</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Go to Settings</h3>
                  <p>Tap on your profile icon or navigate to the Settings menu</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Select "Delete Account"</h3>
                  <p>Scroll down to find the "Delete Account" option in your account settings</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Confirm Deletion</h3>
                  <p>Read the warning about permanent deletion and confirm your choice. Your account will be deleted immediately.</p>
                </div>
              </div>
            </div>

            <h3 className="method-title">Method 2: Email Request</h3>
            <p className="method-description">If you no longer have access to the app or need assistance, you can request deletion via email:</p>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Send an Email Request</h3>
                  <p>Send an email to <a href="mailto:youngdevs2025@gmail.com">youngdevs2025@gmail.com</a> with the subject line: "Account Deletion Request - Foody"</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Include Your Account Information</h3>
                  <p>In your email, please include:</p>
                  <ul>
                    <li>The email address associated with your Foody account</li>
                    <li>Your full name (as registered in the app)</li>
                    <li>Confirmation that you want to permanently delete your account</li>
                  </ul>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Verification</h3>
                  <p>We will verify your identity by confirming your email address matches our records. You may receive a confirmation email to verify this is a legitimate request.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Deletion Processing</h3>
                  <p>Once verified, we will process your deletion request within <strong>30 days</strong>. You will receive a confirmation email when the deletion is complete.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>What Data Will Be Deleted</h2>
            <p>When you request account deletion, the following data will be permanently removed from our systems:</p>
            <ul>
              <li><strong>Account Information:</strong> Your name, email address, and profile picture</li>
              <li><strong>Profile Data:</strong> Age, gender, weight, height, activity level, and weight goals</li>
              <li><strong>Food Tracking Data:</strong> All meal photos, nutritional logs, and calorie tracking history</li>
              <li><strong>Health Metrics:</strong> Daily intake records, progress tracking, and goal history</li>
              <li><strong>App Preferences:</strong> Settings, notifications preferences, and customizations</li>
              <li><strong>Authentication Data:</strong> Your Google sign-in credentials and session tokens</li>
            </ul>
          </section>

          <section>
            <h2>Data Retention & Exceptions</h2>
            <p>After account deletion, certain information may be retained for specific purposes:</p>

            <div className="retention-info">
              <h3>Immediately Deleted (0-30 days)</h3>
              <ul>
                <li>All personal account information</li>
                <li>Food photos and meal tracking data</li>
                <li>Health and nutrition metrics</li>
                <li>User preferences and settings</li>
              </ul>
            </div>

            <div className="retention-info">
              <h3>Retained for Legal/Technical Reasons</h3>
              <p>The following may be retained for up to <strong>90 days</strong> or as required by law:</p>
              <ul>
                <li><strong>Transaction Records:</strong> If you made in-app purchases, financial transaction records may be retained for accounting and tax compliance (typically 7 years as required by law)</li>
                <li><strong>Legal Compliance:</strong> Data required to comply with legal obligations, resolve disputes, or enforce our Terms of Service</li>
                <li><strong>Backup Systems:</strong> Data in backup systems will be deleted during the next scheduled backup rotation (up to 90 days)</li>
                <li><strong>Aggregated Analytics:</strong> Anonymous, aggregated usage statistics that cannot identify you personally</li>
                <li><strong>Security Logs:</strong> De-identified security and fraud prevention logs (retained for up to 1 year)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Important Notes</h2>
            <div className="warning-box">
              <div className="warning-icon">⚠️</div>
              <div>
                <h3>Account Deletion is Permanent</h3>
                <p>Once your account is deleted, this action cannot be undone. All your data, including meal history, progress tracking, and nutritional logs will be permanently lost.</p>
                <p>If you wish to use Foody again in the future, you will need to create a new account and start fresh.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Alternative Options</h2>
            <p>If you're not ready for permanent deletion, consider these alternatives:</p>
            <ul>
              <li><strong>Sign Out:</strong> Simply sign out of the app if you want to take a break</li>
              <li><strong>Clear Data:</strong> You can manually delete specific meal entries or tracking data within the app</li>
              <li><strong>Pause Tracking:</strong> Stop using the app temporarily without deleting your account</li>
            </ul>
          </section>

          <section>
            <h2>Questions or Issues?</h2>
            <p>If you have any questions about the deletion process or encounter any issues, please contact us:</p>
            <p><strong>Email:</strong> <a href="mailto:youngdevs2025@gmail.com">youngdevs2025@gmail.com</a><br />
            <strong>Subject:</strong> Account Deletion Support - Foody<br />
            <strong>Response Time:</strong> Within 48 hours</p>
          </section>

          <div className="contact-box">
            <div className="contact-icon">📧</div>
            <h3>Ready to Delete Your Account?</h3>
            <p>Send your deletion request to:</p>
            <a href="mailto:youngdevs2025@gmail.com?subject=Account%20Deletion%20Request%20-%20Foody" className="email-button">
              youngdevs2025@gmail.com
            </a>
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <div className="footer-links">
          <Link href="/">← Back to Home</Link>
          <span className="separator">|</span>
          <Link href="/privacy">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>

      <style jsx>{`
        .legal-page {
          min-height: 100vh;
        }

        .header {
          padding: 20px 40px;
          border-bottom: 1px solid rgba(52, 199, 89, 0.2);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 600;
          color: #34C759;
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
          color: #34C759;
          margin-bottom: 10px;
          text-align: center;
        }

        .last-updated {
          background: rgba(52, 199, 89, 0.1);
          border: 1px solid rgba(52, 199, 89, 0.3);
          border-radius: 8px;
          padding: 12px 20px;
          display: inline-block;
          margin: 20px auto 40px;
          font-size: 14px;
          color: #34C759;
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
          color: #34C759;
          font-size: 24px;
          margin-bottom: 15px;
          padding-top: 10px;
        }

        h3 {
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 10px;
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

        a {
          color: #34C759;
          text-decoration: underline;
        }

        a:hover {
          color: #30D158;
        }

        .methods-intro {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0 40px;
        }

        .method-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(52, 199, 89, 0.2);
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s;
        }

        .method-card.primary {
          border-color: rgba(52, 199, 89, 0.5);
          background: rgba(52, 199, 89, 0.08);
        }

        .method-card:hover {
          transform: translateY(-3px);
          border-color: rgba(52, 199, 89, 0.6);
        }

        .method-card h3 {
          color: #34C759;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .method-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .method-title {
          color: #34C759;
          font-size: 22px;
          margin-top: 40px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(52, 199, 89, 0.3);
        }

        .method-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          margin-bottom: 20px;
        }

        .steps {
          margin-top: 30px;
        }

        .step {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 12px;
          border-left: 4px solid #34C759;
        }

        .step-number {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: #34C759;
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
        }

        .step-content {
          flex: 1;
        }

        .step-content h3 {
          margin-top: 5px;
          margin-bottom: 10px;
        }

        .step-content ul {
          margin-top: 10px;
        }

        .retention-info {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .retention-info h3 {
          color: #34C759;
          margin-bottom: 15px;
        }

        .warning-box {
          display: flex;
          gap: 20px;
          background: rgba(255, 193, 7, 0.1);
          border: 2px solid rgba(255, 193, 7, 0.3);
          padding: 25px;
          border-radius: 12px;
          margin-top: 20px;
        }

        .warning-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .warning-box h3 {
          color: #FFC107;
          margin-bottom: 10px;
        }

        .contact-box {
          background: rgba(52, 199, 89, 0.1);
          border: 2px solid rgba(52, 199, 89, 0.3);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          margin-top: 40px;
        }

        .contact-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .contact-box h3 {
          color: #34C759;
          margin-bottom: 15px;
        }

        .email-button {
          display: inline-block;
          background: #34C759;
          color: #000000;
          padding: 15px 30px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          margin-top: 15px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .email-button:hover {
          background: #30D158;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .page-footer {
          padding: 40px;
          text-align: center;
          border-top: 1px solid rgba(52, 199, 89, 0.2);
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 28px;
          }

          .legal-content {
            padding: 40px 20px;
          }

          .step {
            flex-direction: column;
            align-items: flex-start;
          }

          .step-number {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .warning-box {
            flex-direction: column;
          }

          .footer-links {
            flex-direction: column;
            gap: 10px;
          }

          .separator {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
