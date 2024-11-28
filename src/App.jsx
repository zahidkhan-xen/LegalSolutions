// import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import "./css/swiper.css";
// import Testimonial from "./components/Testimonial";
// import Clients from "./components/Clients";
import { useEffect, useState } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";
// import AutomatedContract from "./components/AnimatedTestimonial";
import CallBookingSection from "./components/CallBookingSection";
import AnimatedTestimonial from "./components/AnimatedTestimonial";
function App() {
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const enterTime = Date.now();
    setStartTime(enterTime);
    return () => {
      const leaveTime = Date.now();
      if (startTime) {
        const durationInMinutes = (leaveTime - startTime) / 60000; // Time in minutes

        // Log the event to Firebase Analytics
        logEvent(analytics, "Duration_SqueezePage", {
          duration_minutes: durationInMinutes.toFixed(2), // Rounded to 2 decimal places
          start_time: new Date(startTime).toISOString(),
          end_time: new Date(leaveTime).toISOString(),
        });
      }
    };
  }, [startTime]);
  return (
    <div>
      <Navbar />
      <Header />
      <AnimatedTestimonial />
      <CallBookingSection />
      {/* <Clients /> */}
      {/* <Testimonial /> */}
      <Footer />
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
