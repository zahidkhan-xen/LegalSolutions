// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm"; // Import the reservation form component
import Streamlit from "../assets/images/Streamlit.mp4"
const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Modal state

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Function to load the Voiceflow chatbot script
  const loadChatbotScript = () => {
    (function (d, t) {
      var v = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: "66fbdcf5a2dbf86f9c57fcf0" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
  };

  // Call the function to load the chatbot script when the component mounts
  useEffect(() => {
    loadChatbotScript();
  }, []);

  // Function to toggle the chatbot
  const toggleChatbot = () => {
    if (isChatOpen) {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.close();
      }
    } else {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();
      }
    }
    setIsChatOpen(!isChatOpen);
  };

  return (
    <header className="header py-20 text-center md:pt-36  lg:text-center xl:pt-44 xl:pb-32">
      <div className="sm:px-8 lg:grid lg:gap-x-8">
        <div>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-2">
        Let AI eliminate manual contract reviews and boost client engagement
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">
            – so you can focus on scaling your legal firm
          </h2>
        </div>
      </div>

      

      <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:mx-12 mt-2">
        <div className="flex flex-col justify-center text-left sm:text-center md:text-left lg:text-left xl:mr-12">
          <ul className="lg:list-disc">
            <li>
              <h1 className="font-medium text-xl mb-5">
                Automate Contract review - Reduce your non-billable time by up
                to 25%
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-5">
                Automate appointment scheduling - Never miss a potential
                client&apos;s call again
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-5">
                Enhance Customer service - Boost customer&apos;s engagement by
                up to 35% through our chatbot.
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-5">
                Seamless AI integration for your business
              </h1>
            </li>
          </ul>
        </div>

        {/* Optional Image Placeholder */}
        <div className="flex justify-center items-center mb-8 lg:mb-0">
          <div id="reservation" className="w-full">
            <div className="relative pb-[40.25%] mx-20 mt-10 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={Streamlit}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 lg:gap-x-6 mt-11 items-center justify-center">
        <div className="lg:text-right sm:text-center text-center">
          <button
            className="btn-solid-lg"
            onClick={openModal} // Open modal on click
          >
            Book a Discovery Call
          </button>
        </div>

        <div className="lg:text-left sm:text-center text-center">
          <button className="btn-solid-sm" onClick={toggleChatbot}>
            Voice AI scheduling Demo
          </button>
        </div>
      </div>

      {/* Modal with Reservation Form */}
      {isOpen && <ReservationForm isOpen={isOpen} onClose={closeModal} />}
    </header>
  );
};

export default Header;
