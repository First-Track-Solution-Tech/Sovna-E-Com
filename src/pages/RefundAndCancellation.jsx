import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg transition-all">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
          Refund & Cancellation Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">Fashion Style</span>, we value
          transparency and customer satisfaction. This policy explains how
          refunds and cancellations are handled for orders placed on our
          website.
        </p>

        <div className="space-y-6">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Order Cancellation
            </h2>
            <p className="text-gray-700">
              Orders can be canceled before they are dispatched. Once an order
              has been shipped, it cannot be canceled and must follow the
              returns process.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Refund Eligibility
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Refunds are applicable only after product inspection</li>
              <li>Items must meet return eligibility criteria</li>
              <li>Proof of purchase is required</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Refund Method
            </h2>
            <p className="text-gray-700">
              Refunds will be processed to the original payment method used
              during checkout. Cash-on-delivery refunds may be issued via
              bank transfer or store credit.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Refund Timeline
            </h2>
            <p className="text-gray-700">
              Once approved, refunds are processed within
              <span className="font-medium"> 7–10 business days</span>.
              Bank processing time may vary.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Shipping Charges
            </h2>
            <p className="text-gray-700">
              Shipping charges are non-refundable unless the return is due to
              a damaged, defective, or incorrect item delivered by Fashion
              Style.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Failed or Rejected Deliveries
            </h2>
            <p className="text-gray-700">
              If a delivery fails due to incorrect address or repeated failed
              attempts, shipping charges may be deducted from the refund.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              7. Contact Information
            </h2>
            <p className="text-gray-700">
              For refund or cancellation related queries, please contact:
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

export default RefundAndCancellation;
