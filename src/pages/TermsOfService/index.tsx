import { SectionHeader } from '../../components/shared/SectionHeader';

export default function TermsOfService() {
  return (
    <div className="bg-[#070b14] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          title="Terms of Service"
          subtitle="Last Updated: October 2026"
          align="left"
        />
        
        <div className="prose prose-invert prose-lg prose-indigo max-w-none mt-12">
          <p>
            Welcome to Infocera! These Terms of Service outline the rules and regulations for the use of Infocera's Website and Services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Infocera if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Infocera and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Publishing any Website material in any other media.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website in any way that impacts user access to this Website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. No Warranties</h2>
          <p>
            This Website is provided "as is," with all faults, and Infocera expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Infocera, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Infocera operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
          </p>
        </div>
      </div>
    </div>
  );
}
