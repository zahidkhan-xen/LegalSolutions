import { useState } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [lawfirmName, setLawFirmName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/voice-agent/calls/restaurant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          lawfirmName: lawfirmName,
          description: description,
        }),
      });

      if (response.ok) {
        setMessage(
          "Reservation request sent successfully. The AI voice agent will contact you soon!"
        );
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send reservation request: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setName("");
      setDescription("");
      setLawFirmName(""); 
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="py-8 text-center">
      <div className="container mx-auto px-4 sm:px-8 xl:px-4">
        <div className="card mx-auto max-w-lg p-8 bg-blue-50 border border-gray-200 shadow-md rounded-lg">
          <div className="card-body">
            <h5 className="text-2xl font-bold mb-4 text-center">Contact Us</h5>
            {/* <p className="mb-8 text-center">
              Please fill out the form below to book a reservation through
              Ehsaan Voice AI. Our AI voice agent will contact you shortly to
              confirm the details.
            </p> */}

            {message && (
              <p className="mb-4 text-center text-green-500">{message}</p>
            )}

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-left mb-2"
                >
                  Name
                </label>
                <input
                  type="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block text-gray-700 text-left mb-2"
                >
                  Law Firm Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="lawfirmName"
                  placeholder="Enter your Law firm name"
                  value={lawfirmName}
                  onChange={(e) => setLawFirmName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <textarea
                  className="w-full p-2 border border-gray-300 h-32 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="description"
                  placeholder="Brief description of interest..."
                  value={description} // Ensure this state variable is set correctly
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Reservation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
