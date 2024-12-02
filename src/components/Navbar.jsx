import logo from "../assets/images/ET-logo-removebg-preview.png";
const Navbar = () => {
  return (
    <>
      <div className="container p-4">
        <a href="https://ehsaantech.com/">
          <img src={logo} alt="Ehsaantech Logo" className="w-16 h-16" />
        </a>
      </div>
    </>
  );
};

export default Navbar;

// import logo from "../assets/images/ET-logo-removebg-preview.png";

// const Navbar = () => {
//   return (
//     <nav
//       className="navbar fixed-top z-10 bg-white shadow-lg"
//       style={{ boxShadow: "0 4px 6px rgba(0, 0, 0,0.3)" }}
//     >
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex-shrink-0">
//           <a href="/" className="inline-block">
//             <img src={logo} alt="Logo" width={70} height={70} />
//           </a>
//         </div>

//         {/* Title Section */}
//         <div className="flex-grow text-center mx-4 hidden md:block">
//           <h1 className="text-sm md:text-lg lg:text-2xl text-gray-800">
//             Revolutionize Client Interactions – Transform Your Law Practice with AI
//           </h1>
//         </div>

//         {/* Button Section */}
//         <div className="flex-shrink-0">
//           <button
//             className="btn-solid-lg animate-pulse bg-amber-400 text-indigo-800 text-lg font-bold py-3 px-4 rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
//             onClick={() => window.voiceflow.chat.open()}
//           >
//             Try the Chatbot Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// const styles = `
//   .btn-solid-lg {
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//   }

//   @media (min-width: 768px) {
//     .btn-solid-lg {
//       font-size: 1rem;
//       line-height: 1.5rem;
//     }
//   }

//   @keyframes pulse {
//     0%, 100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: 0.7;
//     }
//   }

//   .animate-pulse {
//     animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//   }
// `;

// export { styles };
