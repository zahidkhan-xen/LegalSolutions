import chatbot from "../assets/images/chatbot.png";
const ChatBot = () => {
  return (
    <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="flex flex-col justify-center text-center lg:text-left xl:mr-12">
        <h1 className="h1-large mb-5 font-semibold">Chat Bot</h1>
        <h1 className="text-4xl mb-5">Chat Support</h1>
        <h2 className="p-large mb-8">
          Include an interactive demo of your voice bot in action. Visitors
          caninteract with the demo to see how your system schedules calls and
          answers client queries
        </h2>
        <div>
        <a className="btn-solid-lg text-center" href="#reservation">
          Try it Now
        </a>
        </div>
      </div>
      <div className="xl:text-right">
        <img className="inline" src={chatbot} alt="alternative" />
      </div>
    </div>
  );
};

export default ChatBot;
