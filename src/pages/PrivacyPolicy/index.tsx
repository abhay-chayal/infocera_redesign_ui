import { SectionHeader } from '../../components/shared/SectionHeader';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#070b14] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          title="Privacy Policy"
          subtitle="Last Updated: October 2026"
          align="left"
        />
        
        <div className="prose prose-invert prose-lg prose-indigo max-w-none mt-12">
          <p>
            At Infocera, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions.</li>
            <li>Email you regarding your account or order.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@infocera.in" className="text-indigo-400 hover:text-indigo-300">privacy@infocera.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
