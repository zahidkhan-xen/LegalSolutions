"use client";
import { useState } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";
import ReservationForm from "./ReservationForm";
const CallBookingSection = () => {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const closeVoiceModal = () => setIsVoiceOpen(false);

  const openVoiceModal = () => {
    setIsVoiceOpen(true);
    logEvent(analytics, "VoiceAI_Demo");
  };
  return (
    <header
      id="chatbot"
      className="relative overflow-hidden w-full mt-24"
      // style={{ position: "relative", width: "100%", height: "450px" }} 
    >
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 text-center  ">
        <div className="mb-16 xl:mr-12">
          <h1 className="text-5xl font-bold leading-tight text-center mb-6 text-gray-800">
            Transform Your Law Firm&apos;s Website Today!
          </h1>
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-600">
            Schedule a free 15-minute consultation with our experts and discover
            how we can elevate your online presence.
          </h2>
          <div className="text-center flex items-center justify-center">
        <button
          className="btn-solid-lg text-lg"
          onClick={openVoiceModal}
        >
          Schedule My Free Call!
        </button>
      </div>
        </div>
      </div>
    
     
      {isVoiceOpen && (
        <ReservationForm isVoiceOpen={isVoiceOpen} onClose={closeVoiceModal} />
      )}
    </header>
  );
};

export default CallBookingSection;
