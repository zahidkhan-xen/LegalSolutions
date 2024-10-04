import { useEffect, useState } from "react";

const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track if the chat is open

  // Function to load the Voiceflow chatbot script
  const loadChatbotScript = () => {
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '66fbdcf5a2dbf86f9c57fcf0' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
      v.type = "text/javascript"; 
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
  };

  // Call the function to load the chatbot script when the component mounts
  useEffect(() => {
    loadChatbotScript();
  }, []);

  // Function to toggle the chatbot
  const toggleChatbot = () => {
    if (isChatOpen) {
      // Close the chatbot if it's currently open
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.close(); // Close method
      }
    } else {
      // Open the chatbot if it's currently closed
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open(); // Open method
      }
    }
    setIsChatOpen(!isChatOpen); // Toggle the state
  };

  return (
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-center xl:pt-44 xl:pb-32"
    >
      <div className="container px-4 sm:px-8 lg:grid lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="font-semibold text-4xl mb-5">
            Manual contract reviews and poor client engagement are two key barriers to scaling a legal firm
          </h1>
          <h2 className="p-large mb-8">
            Automate contract review and focus on what truly matters—providing exceptional service to your clients.
          </h2>

          <a className="btn-solid-lg" href="#reservation">
            Book a demo
          </a>
          <a 
            className="btn-solid-lg" 
            href="#!" 
            onClick={toggleChatbot} // Use toggleChatbot for click event
          >
            Chat with Bot
          </a>
        </div>
        {/* Optional Image Placeholder */}
        {/* <div className="xl:text-right">
          <img className="inline" src={heroLogo} alt="alternative" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
