import { signOut } from "firebase/auth";
import { useState } from "react";
import { FaBars, FaFacebook, FaRaspberryPi, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/config";

function Header({ pageTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];

  function handleLogOut() {
    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      <h1>{pageTitle}</h1>

      {/* <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Books
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

                    <button 
                    onClick={handleLogOut}
                    className="btn transparent">
                      Logout
                    </button>

              
            </div> */}
      <header className="bg-black text-white fixed left-0 right-0 top-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <a href="" className="text-white font-bold text-xl">
            Pitsi<span className="text-orange-400">KM</span>
          </a>

          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to="#"
                  className={
                    item.path === activeNavItem
                      ? "text-orange-500 hover:border-b border-orange-400 underline-offset-4"
                      : "text-white"
                  }
                  onClick={() => setActiveNavItem(item.path)}
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-white lg:flex gap-6 items-center mr-8 hidden">
            <div className="text-white hover:text-orange-400">
              <NavLink to="/">
                <button className="">Books</button>
              </NavLink>
            </div>
            <div className="text-white hover:text-orange-400">
              <NavLink to="/add-book">
                <button className="btn">Add Book +</button>
              </NavLink>
            </div>
            <button
              onClick={handleLogOut}
              className="bg-orange-400 hover:bg-gray-200 py-2 px-4 text-gray-100 hover:text-gray-900 rounded-md font-medium transition-all duration-200 ease-in"
            >
              Log Out
            </button>
          </div>

          {/* Pass onClose and isOpen props to Modal */}
          {/* <Modal onClose={closeModal} isOpen={isModalOpen} /> */}

          <div className="curser-pointer md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        <div className="">
          <ul
            className={`"md:hidden gap-12 text-lg block spacing-y-4 px-4 py-6 mt-14 bg-white" ${
              isMenuOpen
                ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 bg-orange-50"
                : "hidden"
            }`}
          >
            {/* {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to="#"
                onClick={toggleMenu}
                className="text-gray-900 hover:text-orange-400 hover:border-b border-orange-400"
              >
                {item.link}
              </NavLink>
            </li>
          ))} */}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
