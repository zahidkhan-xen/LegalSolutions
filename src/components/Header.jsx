// import heroLogo from "../assets/images/chef-cartoon-png-clipart-removebg-preview.png";

const Header = () => {
  return (
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-center xl:pt-44 xl:pb-32"
    >
      <div className="container px-4 sm:px-8 lg:grid lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="font-semibold text-4xl  mb-5">Manual contract reviews and poor client engagement are two key barriers to scaling a legal firm</h1>
          <h2 className="p-large mb-8">
          Automate contract review and focus on what truly matters—providingexceptional service to your clients.
          </h2>

          <a className="btn-solid-lg" href="#reservation">
            Book a demo
          </a>
          <a className="btn-solid-lg" href="#reservation">
            Chat with Bot
          </a>
        </div>
        {/* <div className="xl:text-right">
          <img className="inline" src={heroLogo} alt="alternative" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
