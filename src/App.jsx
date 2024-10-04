import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import ReservationForm from "./components/ReservationForm";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import "./css/swiper.css";
import VoiceBot from "./components/VoiceBot";
import AutomatedContract from "./components/AutomatedContract";
import ChatBot from "./components/ChatBot";
import Testimonial from "./components/Testimonial";
// import SnippetSlider from "./components/Testimonial";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <VoiceBot />
      <AutomatedContract />
      <ChatBot />
      {/* <Introduction /> */}
      {/* <ReservationForm /> */}
      {/* <SnippetSlider /> */}
      <Testimonial />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
