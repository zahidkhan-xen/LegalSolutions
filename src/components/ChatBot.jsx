// import heroLogo from "../assets/images/chef-cartoon-png-clipart-removebg-preview.png";
import Robot_bg from "../assets/images/Robot_bg.png";
const ChatBot = () => {
    return (
    //   <header
    //     id="header"
    //     className="header py-28 text-center md:pt-36 lg:text-center xl:pt-44 xl:pb-32"
    //   >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16  xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5 font-semibold">Chat Bot</h1>
            <h1 className="text-4xl mb-5">Chat Support</h1>
            <h2 className="p-large mb-8">
            Include an interactive demo of your voice bot in action. Visitors caninteract with the demo to see how your system schedules calls and answers client queries
            </h2>
  
            {/* <a className="btn-solid-lg" href="#reservation">
              Book a demo
            </a>
            <a className="btn-solid-lg" href="#reservation">
              Chat with Bot
            </a> */}
            <a className="btn-solid-lg" href="#reservation">
            Try it Now
          </a>
          </div>
          <div className="xl:text-right">

            <img className="inline" src={Robot_bg} alt="alternative" />
          
          </div>
        </div>
    //   </header>
    );
  };
  
  export default ChatBot;
  