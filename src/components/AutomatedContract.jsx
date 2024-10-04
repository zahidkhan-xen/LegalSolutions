const AutomatedContract = () => {
  return (
    <header id="header" className="py-28 md:pt-36 xl:pt-44 xl:pb-32">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        
        {/* Iframe Section */}
        <div className="flex justify-center items-center mb-8 lg:mb-0">
          <div id="reservation" className="w-full">
            <div className="relative pb-[100.25%] px-[50%] h-0 overflow-hidden"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/kttcDLI_-XQ"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left xl:mr-12">
          <h1 className="h1-large mb-5 font-semibold">
            Automated Contract Review
          </h1>
          <h1 className="text-4xl mb-5">
            Reduce your non-billable time by up to 25% with Automated Contract
            Review
          </h1>
          <p className="p-large mb-8">
            Our custom AI-driven solution processes legal documents in seconds,
            extracting key insights from multiple formats seamlessly.
          </p>
          <p className="p-large mb-8">
            By integrating directly into your workflow, you can focus more on
            high-value tasks and deliver more to your clients.
          </p>
          <div>
          <a className="btn-solid-lg text-center mt-4" href="#reservation">
            Book a demo
          </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AutomatedContract;
