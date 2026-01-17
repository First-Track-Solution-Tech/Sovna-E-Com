// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

//         <p className="text-lg text-center max-w-2xl mx-auto mb-12">
//           Have questions or need help? We’d love to hear from you.
//         </p>

//         <div className="grid md:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
//             <p className="mb-3">Email: support@fashionstyle.com</p>
//             <p className="mb-3">Phone: +91 98765 43210</p>
//             <p className="mb-3">
//               Support Hours: Monday – Saturday, 10:00 AM – 7:00 PM
//             </p>
//           </div>

//           <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 rounded border dark:bg-gray-700"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 rounded border dark:bg-gray-700"
//             />
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full px-4 py-2 rounded border dark:bg-gray-700"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;




import React from "react";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/Contact-Hero-bg.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-lg text-center max-w-2xl mx-auto mb-14 text-gray-200">
          Have questions or need help? We’d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT INFO BOX */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="mb-4 text-gray-200">
              📧 Email: support@fashionstyle.com
            </p>
            <p className="mb-4 text-gray-200">
              📞 Phone: +91 1234567890
            </p>
            <p className="text-gray-200">
              ⏰ Support Hours: Monday – Saturday, 10:00 AM – 7:00 PM
            </p>
          </div>

          {/* FORM BOX */}
          <form className="rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
