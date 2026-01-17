import React from "react";
import { Target, Eye, Star } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-[85vh] md:h-[95vh] flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/About-Hero-bg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-wide">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed">
            Fashion Style is more than just a clothing brand — it’s a lifestyle.
            We create modern, stylish, and comfortable fashion that empowers
            confidence and individuality.
          </p>
            <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-pink-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-5 group-hover:bg-pink-500 group-hover:text-white transition">
                <Target size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-600 transition">
                Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                To deliver trend-focused fashion that combines quality, affordability,
                and comfort.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-purple-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-5 group-hover:bg-purple-500 group-hover:text-white transition">
                <Eye size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition">
                Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                To become a trusted fashion destination where style meets confidence.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-amber-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-5 group-hover:bg-amber-500 group-hover:text-white transition">
                <Star size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600 transition">
                Why Fashion Style
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                Premium fabrics, trend-driven designs, reliable service, and a
                customer-first experience.
                </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;




// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <h1 className="text-4xl font-bold text-center mb-6">
//           About Fashion Style
//         </h1>

//         <p className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
//           Fashion Style is more than just a clothing brand — it’s a reflection of
//           confidence, individuality, and modern elegance. We bring you fashion
//           that fits your lifestyle and speaks your personality.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
//             <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
//             <p className="text-sm leading-relaxed">
//               To make trendy, high-quality fashion accessible to everyone while
//               maintaining affordability and comfort.
//             </p>
//           </div>

//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
//             <h3 className="text-xl font-semibold mb-3">Our Style</h3>
//             <p className="text-sm leading-relaxed">
//               From everyday essentials to statement outfits, our designs are
//               inspired by global trends and modern lifestyles.
//             </p>
//           </div>

//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
//             <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
//             <p className="text-sm leading-relaxed">
//               Premium fabrics, thoughtful designs, fast delivery, and a
//               customer-first approach define Fashion Style.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
