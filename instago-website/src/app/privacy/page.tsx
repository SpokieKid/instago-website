import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              InstaGo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our screenshot management application and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> When you create an account, we collect your email address, username, and password.</li>
              <li><strong>Screenshots:</strong> Images you upload to our Service for storage and AI processing.</li>
              <li><strong>User Content:</strong> Notes, tags, and descriptions you add to your screenshots.</li>
              <li><strong>Profile Information:</strong> Optional information you may add to your profile.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Usage Data:</strong> Information about how you interact with our Service, including search queries, feature usage, and navigation patterns.</li>
              <li><strong>Device Information:</strong> Device type, operating system, app version, and unique device identifiers.</li>
              <li><strong>Log Data:</strong> IP address, access times, and error logs for troubleshooting.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>OAuth Providers:</strong> If you sign in using Apple Sign In or other OAuth providers, we receive your email and basic profile information.</li>
              <li><strong>iOS Shortcuts:</strong> Usage data when you interact with our iOS Shortcuts integration.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and maintain our Service</li>
              <li>To process and store your screenshots securely</li>
              <li>To apply AI analysis for automatic tagging and categorization</li>
              <li>To enable semantic search functionality</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers, and general information about other services we offer</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Where We Store Your Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Screenshots:</strong> Stored securely in Google Cloud Storage with encryption at rest</li>
              <li><strong>Database:</strong> User data and metadata stored in Supabase (PostgreSQL)</li>
              <li><strong>Vector Database:</strong> Screenshot embeddings stored in Milvus for semantic search</li>
              <li><strong>Local Storage:</strong> Screenshots saved to your device&apos;s Photos app in a dedicated &quot;Restacks&quot; album</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Security Measures</h3>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Encryption at rest for stored data</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular backups of critical data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Processing and Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To provide our AI-powered features, we use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>OpenAI GPT-4:</strong> For analyzing screenshots and generating tags, titles, and descriptions</li>
              <li><strong>Google Gemini 2.0:</strong> Optional alternative for AI processing</li>
              <li><strong>Supabase:</strong> For authentication and database services</li>
              <li><strong>Google Cloud Platform:</strong> For secure image storage and infrastructure</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When we share your data with these services, we ensure they are bound by appropriate data protection agreements and only process your data as necessary to provide our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal data only for as long as necessary to provide you with our Service and as described in this Privacy Policy. We will retain and use your information to the extent necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Maintain your account</li>
              <li>Provide our Service features</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When you delete your account, we will delete or anonymize your personal data within 30 days, unless we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent where we rely on it to process your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us through the app&apos;s support section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Right to know what personal information we collect, use, disclose, and sell</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the specific data and context:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li><strong>Contract:</strong> Processing necessary to provide our Service to you</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
              <li><strong>Consent:</strong> Where you have given us consent to process your data</li>
              <li><strong>Legal Obligations:</strong> Processing necessary to comply with law</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} InstaGo. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}