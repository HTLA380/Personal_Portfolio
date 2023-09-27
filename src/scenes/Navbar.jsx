import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";

const Link = ({ page }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className="hover:text-yellow"
      style={{ transition: "all 0.5s ease-in-out" }}
      href={`#${lowerCasePage}`}>
      {page}
    </AnchorLink>
  );
};

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleActive = () => {
    window.scrollY >= 100 ? setIsNavbarActive(true) : setIsNavbarActive(false);
  };

  window.addEventListener("scroll", toggleActive);

  return (
    <header
      className={`z-50 w-full fixed top-0 py-4 md:py-6 ${
        isNavbarActive && "bg-[#0a0a0abb] shadow-lg shadow-black/10"
      }`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-serif text-2xl sm:text-3xl text-pink">HTLA</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <nav className="flex justify-between gap-16 font-dmSans text-sm text-pink">
            <Link page="Home" />
            <Link page="About Me" />
            <Link page="Skills" />
            <Link page="Projects" />
            <Link page="Contact" />
          </nav>
        ) : (
          <button
            className="rounded-full border p-[5px] bg-red"
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && (
          <div
            style={{
              right: isMenuToggled ? "0px" : "-100%",
              transition: "right 0.2s 0.1s ease-in-out",
            }}
            className="fixed
               bottom-0 h-full bg-gray-200 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button
                className="text-black text-2xl"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FaTimes />
              </button>
            </div>

            {/* MENU ITEMS */}
            <nav className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page="Home" />
              <Link page="Skills" />
              <Link page="Projects" />
              <Link page="Contact" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
