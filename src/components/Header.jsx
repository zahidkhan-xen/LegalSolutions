// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm"; 
import Streamlit2 from "../assets/images/Streamlit2.mp4";
import CalendlyModal from "./CalendlyModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isVoiceOpen, setIsVoiceOpen] = useState(false); 

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openVoiceModal = () => setIsVoiceOpen(true);
  const closeVoiceModal = () => setIsVoiceOpen(false);

  return (
    <header className="header py-18 text-center md:pt-36  lg:text-center xl:pt-44 xl:pb-32">
      <div className="sm:px-8 lg:grid lg:gap-x-8">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-6xl mb-4">
            Automate Your Contract Reviews with AI
          </h1>
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4">
            Save time, reduce manual work, and enhance client engagement
          </h2>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:mx-12 mt-2">
        <div className="flex flex-col justify-center text-center sm:text-center md:text-center lg:text-left xl:mr-12">
          <ul className="lg:list-disc">
            <li>
              <h1 className="font-medium text-xl mb-5">
                Enhance operational efficiency by streamlining document
                workflows
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-5">
                Deliver personalized client experiences through intelligent,
                responsive communication{" "}
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-5">
                Never miss a potential lead with automated call scheduling{" "}
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
                src={Streamlit2}
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
          <button className="btn-solid-lg" onClick={openModal}>
            Book a Discovery Call
          </button>
        </div>

        <div className="lg:text-left sm:text-center text-center">
          <button className="btn-solid-sm" onClick={openVoiceModal}>
            Voice AI scheduling Demo
          </button>
        </div>
      </div>
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />

      {/* Modal with Reservation Form */}
      {isVoiceOpen && (
        <ReservationForm isVoiceOpen={isVoiceOpen} onClose={closeVoiceModal} />
      )}
    </header>
  );
};

export default Header;
