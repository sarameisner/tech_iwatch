const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#C8DCE5] to-[#B6CCDA]">
      <div className="flex items-center space-x-8">
        <img src="/apple-logo.png" alt="Apple logo" className="h-10" />
        <a href="#" className="text-white font-semibold">
          Mac
        </a>
        <a href="#" className="text-white font-semibold">
          iPhone
        </a>
        <a href="#" className="text-white font-semibold">
          iPad
        </a>
        <a href="#" className="text-white font-semibold">
          iWatch
        </a>
        <a href="#" className="text-white font-semibold">
          Support
        </a>
      </div>
      <div className="flex space-x-6">
        <a href="#">
          <img src="/search-icon.png" alt="Search icon" className="h-6" />
        </a>
        <a href="#">
          <img src="/cart-icon.png" alt="Cart icon" className="h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
