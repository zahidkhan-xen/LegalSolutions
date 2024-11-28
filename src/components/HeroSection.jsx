import { useState } from "react";
import { CheckCircle, FileText, ArrowUp } from "lucide-react";
import Robot_bg from "../assets/images/Robot_bg.png";
import ReservationForm from "./ReservationForm";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";

const blogPreview = {
  title: "5 Ways a Voice Bot Can Enhance Client Interactivity at Your Law Firm",
  description:
    "AI-powered voice bots are revolutionizing how law firms engage with their clients, improving responsiveness and communication.",
  challenges: ["Challenge 1: Consistency"],
};

const HeroSection = () => {
  // const [textLength] = useState("Medium");
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const openVoiceModal = () => {
    setIsVoiceOpen(true);
    logEvent(analytics, "VoiceAI_Demo");
  };
  const closeVoiceModal = () => setIsVoiceOpen(false);

  return (
    <div className="min-h-screen bg-white py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center py-8">
        {/* Headings */}
        <div className="headings">
          <h1 className=" font-semibold text-xl sm:text-3xl lg:text-5xl text-black mb-4">
            Instantly Book More Consultations.
          </h1>
        </div>
        <div className="max-w-xl">
          <h2 className="text-gray-400 sm:text-2xl lg:text-xl text-black">
            Say goodbye to outdated &apos;Contact Us&apos; forms. Engage leads
            in an integrated chatbot designed for law firms.
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Left Section */}
        <div className="bg-[#F7C948] rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-8">
            Streamline Appointments, Your Law Firm&apos;s AI-Powered Assistant.
          </h1>

          <div className="flex items-start space-x-3 mb-8">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Save Time: Instant query handling improves client experience.
            </p>
          </div>

          <div className="flex items-start space-x-3 mb-8">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Boost Conversions: Engage leads before they leave.
            </p>
          </div>

          <div className="flex items-start space-x-3 mb-8">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Easy Integration: No need for a complete website redesign.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-gray-600" />
              <h2 className="text-xl font-semibold">Blog</h2>
            </div>

            <h3 className="text-xl font-semibold mb-2">{blogPreview.title}</h3>
            <p className="text-gray-600 mb-4">{blogPreview.description}</p>
            {/* <p className="text-gray-600 mb-6">{blogPreview.challenges[0]}</p> */}

            <div className="flex items-center justify-between">
  <button
    className="btn-solid-lg text-lg pulse-btn"
    onClick={openVoiceModal}
  >
    Book a Call Now
  </button>
</div>

          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 p-8 rounded-3xl">
          <h2 className="text-4xl font-bold mb-8">
            Streamline client interactions effortlessly with your first chatbot.
          </h2>

          <div className="flex items-start space-x-3 mb-12">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Enhanced oversight to ensure seamless appointment scheduling and
              timely client responses.
              {/* <span className="text-blue-600">time</span>. */}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">06</p>
                  <p className="text-gray-600">Completed projects</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-24 h-24">
                <img src={Robot_bg} />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <ArrowUp className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">02</p>
                  <p className="text-gray-600">Active projects</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-24 h-24">
                <img src={Robot_bg} />
              </div>
            </div>
            <button
              onClick={() => window.voiceflow.chat.open()}
              className="btn-solid-lg text-lg"
            >
              Interact with the Chatbot
            </button>
          </div>
        </div>
      </div>
      {isVoiceOpen && (
        <ReservationForm isVoiceOpen={isVoiceOpen} onClose={closeVoiceModal} />
      )}
    </div>
  );
};

export default HeroSection;
