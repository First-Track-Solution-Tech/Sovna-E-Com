import React from "react";

const TermsOfUses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-20">
      <div
        className="
          max-w-5xl mx-auto 
          bg-white/90 backdrop-blur-md 
          rounded-2xl 
          p-6 sm:p-10
          shadow-lg hover:shadow-2xl 
          hover:-translate-y-1
          transition-all duration-300 ease-in-out
        "
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
          Terms of Use
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Fashion Style</span>.
          By accessing or using our website, you agree to be bound by these
          Terms of Use. Please read them carefully before using our services.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By browsing, accessing, or purchasing from Fashion Style, you
              acknowledge that you have read, understood, and agreed to these
              Terms of Use. If you do not agree, please discontinue use of the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Use of Website
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Use the website only for lawful purposes</li>
              <li>Do not misuse or attempt unauthorized access</li>
              <li>Do not disrupt website functionality or security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Account Responsibility
            </h2>
            <p className="text-gray-700">
              If you create an account, you are responsible for maintaining
              the confidentiality of your login credentials and for all
              activities conducted under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Product Information
            </h2>
            <p className="text-gray-700">
              We strive to provide accurate product details, pricing, and
              availability. However, we do not guarantee that all information
              is error-free, and we reserve the right to make changes at any
              time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Orders & Payments
            </h2>
            <p className="text-gray-700">
              All orders are subject to acceptance and availability. Fashion
              Style reserves the right to cancel or refuse any order at its
              discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Shipping & Delivery
            </h2>
            <p className="text-gray-700">
              Delivery timelines are estimates and may vary due to factors
              beyond our control. Fashion Style is not liable for courier
              delays.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              7. Returns & Refunds
            </h2>
            <p className="text-gray-700">
              All returns and refunds are governed by our Returns & Refund
              Policy. Please review it before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content on this website, including images, logos, text, and
              designs, is the property of Fashion Style and may not be copied
              or reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              9. Third-Party Links
            </h2>
            <p className="text-gray-700">
              Fashion Style is not responsible for the content or practices of
              third-party websites linked on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Fashion Style shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              11. Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to terminate or restrict access to our
              website at any time without notice if these terms are violated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700">
              These Terms of Use may be updated from time to time. Continued
              use of the website constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              13. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions regarding these Terms of Use, please
              contact us at:
            </p>
            <p className="mt-2 font-medium text-gray-800">
              Fashion Style <br />
              Email: support@fashionstyle.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUses;
