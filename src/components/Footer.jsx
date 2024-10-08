import { useState } from "react";
import CalendlyModal from "./CalendlyModal";


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal state

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="footer">
      <div className="container px-4 sm:px-8">
          <div className="flex items-center justify-center" >
          <button
            className="btn-solid-lg"
            onClick={openModal} 
          >
            Contact Us
          </button>
</div>
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
      
        </div>

        <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
          Ehsaan Technologies is a Software Development & Consultancy firm
          providing customized Web development and Mobile App development
          services to its customers across the Globe.{" "}
          <a
            className="text-indigo-600 hover:text-gray-500"
            href="mailto:info@ehsaantech.com"
          >
            info@ehsaantech.com
          </a>
        </h4>
       
        <div className="social-container">
          <span className="fa-stack">
            <a
              href="https://www.linkedin.com/company/ehsaan-tech/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin-in fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a
              href="https://ehsaantech.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-globe fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a
              href="https://dev.to/ehsaantech"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-rss fa-stack-1x"></i>
            </a>
          </span>
        </div>
      </div>
  );
};

export default Footer;
