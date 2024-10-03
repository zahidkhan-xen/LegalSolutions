import logo from "../assets/images/ET-logo-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top z-50 bg-white">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="/"
        >
          <img src={logo} alt="alternative" className="h-12" />
        </a>
        <span className="text-xl">Ehsaan Voice AI</span>
        <button
          className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
          type="button"
        >
          <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
        </button>
        <div
          className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
          id="navbarsExampleDefault"
        >
          <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            <li>
              <a className="nav-link page-scroll active" href="#header">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
