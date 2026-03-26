// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Landing = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-black text-white">

//       {/* 🔥 NAVBAR */}
//       <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
//         <h1 className="text-2xl font-bold text-blue-500">DevTinder</h1>

//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
//           >
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* 🚀 HERO SECTION */}
//       <div className="flex flex-col items-center justify-center text-center px-6 mt-20">

//         {/* Animated Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6"
//         >
//           Where Developers Connect 🤝
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-gray-400 max-w-2xl mb-8 text-lg"
//         >
//           DevTinder helps developers meet, collaborate, and build amazing projects together.
//           Find your perfect coding partner and grow faster 🚀
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex gap-4"
//         >
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-blue-500 px-6 py-3 rounded-xl text-lg hover:bg-blue-600"
//           >
//             Start Connecting
//           </button>

//           <button
//             onClick={() => navigate("/feed")}
//             className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-gray-800"
//           >
//             Explore Developers
//           </button>
//         </motion.div>

//               {/* Image */}
//               <motion.img

//                   src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
//                   alt="developer"
//                   className="w-40 mx-auto mt-10"

//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1 }}
//               />
//       </div>

//       {/* ✨ FEATURES SECTION */}
//       <div className="mt-32 px-10 grid md:grid-cols-3 gap-8">

//         {[
//           {
//             title: "Find Developers",
//             desc: "Connect with developers based on skills & interests",
//           },
//           {
//             title: "Collaborate",
//             desc: "Work together on real-world projects",
//           },
//           {
//             title: "Grow Network",
//             desc: "Build meaningful tech connections",
//           },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 border border-gray-800 rounded-xl bg-gray-900"
//           >
//             <h2 className="text-xl font-semibold mb-2 text-blue-400">
//               {item.title}
//             </h2>
//             <p className="text-gray-400">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* FOOTER */}
//       <div className="text-center mt-20 py-6 border-t border-gray-800 text-gray-500">
//         © 2026 DevTinder • Built by Ashutosh 🚀
//       </div>
//     </div>
//   );
// };

// export default Landing;





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Landing = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen text-white relative overflow-hidden">

//       {/* 🌌 BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//           alt="bg"
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-black/70"></div>
//       </div>

//       {/* 🔥 FLOATING TECH ICONS */}
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
//         className="w-10 absolute top-20 left-10 animate-bounce opacity-80"
//         alt="js"
//       />
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/919/919828.png"
//         className="w-10 absolute bottom-20 right-10 animate-pulse opacity-80"
//         alt="react"
//       />

//       {/* 🔥 NAVBAR */}
//       <nav className="relative z-10 flex justify-between items-center px-10 py-5 backdrop-blur-md bg-white/10 border-b border-white/20">
//         <h1 className="text-2xl font-bold text-blue-400">DevTinder</h1>

//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-800 transition"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
//           >
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* 🚀 HERO SECTION */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-24">

//         {/* ✨ Animated Gradient Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
//         >
//           Where Developers Connect 🤝
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-gray-300 max-w-2xl mb-8 text-lg"
//         >
//           DevTinder helps developers meet, collaborate, and build amazing projects together.
//           Find your perfect coding partner and grow faster 🚀
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex gap-4"
//         >
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-blue-500 px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
//           >
//             Start Connecting
//           </button>

//           <button
//             onClick={() => navigate("/feed")}
//             className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
//           >
//             Explore Developers
//           </button>
//         </motion.div>

//         {/* 👨‍💻 Developer Image */}
//         <motion.img
//           src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
//           alt="developer"
//           className="w-44 mx-auto mt-12 drop-shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         />
//       </div>

//       {/* ✨ FEATURES SECTION */}
//       <div className="relative z-10 mt-32 px-10 grid md:grid-cols-3 gap-8">

//         {[
//           {
//             title: "Find Developers",
//             desc: "Connect with developers based on skills & interests",
//           },
//           {
//             title: "Collaborate",
//             desc: "Work together on real-world projects",
//           },
//           {
//             title: "Grow Network",
//             desc: "Build meaningful tech connections",
//           },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400 transition"
//           >
//             <h2 className="text-xl font-semibold mb-2 text-blue-400">
//               {item.title}
//             </h2>
//             <p className="text-gray-300">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* FOOTER */}
//       <div className="relative z-10 text-center mt-20 py-6 border-t border-white/20 text-gray-400">
//         © 2026 DevTinder • Built by Ashutosh 🚀
//       </div>
//     </div>
//   );
// };

// export default Landing;






import React, { useState } from "react";
import { motion } from "framer-motion";

const developers = [
  { name: "Ashutosh", skill: "MERN Stack Dev" },
  { name: "Rahul", skill: "AI/ML Engineer" },
  { name: "Priya", skill: "Frontend Developer" },
];

const testimonials = [
  {
    name: "Aman",
    text: "Found an amazing teammate for my startup 🚀",
  },
  {
    name: "Sneha",
    text: "Built 3 projects through DevTinder 🔥",
  },
  {
    name: "Rohit",
    text: "My network grew by 200+ developers in 2 months! 🤝",
  },
];

const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  // 👉 Swipe handler
  const handleSwipe = (dir) => {
    setIndex((prev) => (prev + 1) % developers.length);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="w-full h-full object-cover opacity-30"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔥 NAVBAR */}
      <nav className="relative z-10 flex justify-between px-10 py-5 backdrop-blur-md bg-white/10">
        <h1 className="text-2xl text-blue-400 font-bold">DevTinder</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          Login / Signup
        </button>
      </nav>

      {/* 🚀 HERO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mt-24 px-6"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Where Developers Connect 🤝
        </h1>

        <p className="mt-4 text-gray-300">
          Meet, collaborate and build projects 🚀
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-blue-500 px-6 py-3 rounded-xl"
        >
          Get Started
        </button>
      </motion.div>

      {/* 🔥 CUSTOM TINDER SWIPE */}
      <div className="relative z-10 mt-20 flex flex-col items-center">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 120) handleSwipe("right");
            else if (info.offset.x < -120) handleSwipe("left");
          }}
          className="w-80 h-96 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col justify-center items-center cursor-grab active:cursor-grabbing"
        >
          <h2 className="text-2xl text-blue-400">
            {developers[index].name}
          </h2>
          <p className="text-gray-300">
            {developers[index].skill}
          </p>
        </motion.div>

        <p className="mt-4 text-gray-400 text-sm">
          ← Swipe left | Swipe right →
        </p>
      </div>

      {/* ✨ FEATURES */}
      <div className="relative z-10 mt-32 px-10 grid md:grid-cols-3 gap-8">
        {["Find Developers", "Collaborate", "Grow Network"].map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-xl"
          >
            <h2 className="text-xl text-blue-400">{title}</h2>
            <p className="text-gray-300 mt-2">
              Build connections and grow faster 🚀
            </p>
          </motion.div>
        ))}
      </div>

      {/* 💬 TESTIMONIALS */}
      <div className="relative z-10 mt-32 px-10 text-center">
        <h2 className="text-3xl font-bold mb-10">What Developers Say 💬</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white/10 p-6 rounded-xl"
            >
              <p className="text-gray-300">"{t.text}"</p>
              <h4 className="mt-4 text-blue-400">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔐 LOGIN MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl w-96">
            <h2 className="text-2xl mb-4">Login / Signup</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 rounded bg-gray-800"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 rounded bg-gray-800"
            />

            <button className="w-full bg-blue-500 py-2 rounded mb-3">
              Continue
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="relative z-10 text-center mt-20 py-6 text-gray-400">
        © 2026 DevTinder • Built by Ashutosh 🚀
      </div>
    </div>
  );
};

export default Landing;