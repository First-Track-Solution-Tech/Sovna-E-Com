import React from "react";

const ReturnAndExchanges = () => {
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
          Return & Exchanges
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">Fashion Style</span>, your
          satisfaction is our priority. If you are not completely satisfied
          with your purchase, we offer a simple and transparent returns and
          exchanges process.
        </p>

        <div className="space-y-6">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Return Eligibility
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Items must be returned within 7 days of delivery</li>
              <li>Products must be unused, unworn, and in original condition</li>
              <li>Original tags, packaging, and invoice must be intact</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Non-Returnable Items
            </h2>
            <p className="text-gray-700 mb-2">
              The following items are not eligible for return or exchange:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Innerwear, lingerie, and swimwear</li>
              <li>Customized or made-to-order products</li>
              <li>Items purchased during clearance or sale (unless damaged)</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Exchange Policy
            </h2>
            <p className="text-gray-700">
              Exchanges are available for size or color issues, subject to
              stock availability. If the requested item is unavailable, a
              refund or store credit may be offered.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Refund Process
            </h2>
            <p className="text-gray-700">
              Once the returned item is received and inspected, refunds will
              be processed within 7–10 business days. Refunds will be issued
              to the original payment method.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Damaged or Incorrect Items
            </h2>
            <p className="text-gray-700">
              If you receive a damaged, defective, or incorrect product,
              please contact us within 48 hours of delivery with supporting
              images for quick resolution.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Return Shipping
            </h2>
            <p className="text-gray-700">
              Return shipping costs may be borne by the customer unless the
              return is due to a damaged or incorrect product delivered by
              Fashion Style.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              7. Cancellation Policy
            </h2>
            <p className="text-gray-700">
              Orders can be canceled before dispatch. Once shipped, the order
              cannot be canceled and must follow the return process.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              For any questions related to returns or exchanges, please reach
              out to us at:
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

export default ReturnAndExchanges;
