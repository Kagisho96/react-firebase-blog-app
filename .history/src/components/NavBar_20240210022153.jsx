import React, { useState } from "react";
import { FaBars, FaFacebook, FaRaspberryPi, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

// import Modal from "./Modal";

// import Modal from "./Modal";
// import React, { useState } from "react";
// import { FaBars, FaFacebook, FaRaspberryPi, FaXmark } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";

// // import classnames from "classnames";

// const NavBar = () => {
//   // Menu functionality
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeNavItem, setActiveNavItem] = useState("/");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // navItems
//   const navItems = [
//     { path: "/", link: "Home" },
//     { path: "/blogs", link: "Blogs" },
//     { path: "/about", link: "About" },
//     { path: "/services", link: "Services" },
//     { path: "/contact", link: "Contact" },
//   ];

//   // modal details
//   const openModal = () => {
//     setIsModalOpen(true)
//   }
//   const closeModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <header className="bg-black text-white fixed left-0 right-0 top-0">
//       <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
//         {/* logo */}
//         <a href="" className="text-white font-bold text-xl">
//           Pitsi<span className="text-orange-400">KM</span>
//         </a>

//         {/* navItems for lg devices */}
//         <ul className="md:flex gap-12 text-lg hidden">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.path}
//                 className={
//                   item.path === activeNavItem
//                     ? "text-orange-500 hover:border-b border-orange-400 underline-offset-4"
//                     : "text-white"
//                 }
//                 onClick={() => setActiveNavItem(item.path)}
//               >
//                 {item.link}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* menu icons */}

//         <div className="text-white lg:flex gap-6 items-center mr-8 hidden">
//           <a href="/" className="text-white hover:text-orange-400">
//             <FaFacebook />
//           </a>
//           <a href="/" className="text-white hover:text-orange-400">
//             <FaRaspberryPi />
//           </a>
//           <a href="/" className="text-white hover:text-orange-400">
//             <FaFacebook />
//           </a>
//           <button onClick={openModal} className="bg-orange-400 hover:bg-gray-200 py-2 px-4 text-gray-100 hover:text-gray-900 rounded-md font-medium transition-all duration-200 ease-in">
//             Log In
//           </button>
//         </div>

//         {/* Modal Preview */}

//         <Modal isOpen={isModalOpen} onClose={closeModal}/>

//         {/* mobile menu */}
//         <div className="curser-pointer md:hidden">
//           <button onClick={toggleMenu}>
//             {isMenuOpen ? (
//               <FaXmark className="w-5 h-5" />
//             ) : (
//               <FaBars className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* menuItems at mobile */}
//       <div className="">
//         <ul
//           className={`"md:hidden gap-12 text-lg block spacing-y-4 px-4 py-6 mt-14 bg-white" ${
//             isMenuOpen
//               ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 bg-orange-50"
//               : "hidden"
//           }`}
//         >
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.path}
//                 onClick={toggleMenu}
//                 className="text-gray-900 hover:text-orange-400 hover:border-b border-orange-400"
//               >
//                 {item.link}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default NavBar;


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Set isOpen to false to close the modal
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-black text-white fixed left-0 right-0 top-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="" className="text-white font-bold text-xl">
          Pitsi<span className="text-orange-400">KM</span>
        </a>

        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
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
          <a href="/" className="text-white hover:text-orange-400">
            <FaFacebook />
          </a>
          <a href="/" className="text-white hover:text-orange-400">
            <FaRaspberryPi />
          </a>
          <a href="/" className="text-white hover:text-orange-400">
            <FaFacebook />
          </a>
          <button onClick={openModal} className="bg-orange-400 hover:bg-gray-200 py-2 px-4 text-gray-100 hover:text-gray-900 rounded-md font-medium transition-all duration-200 ease-in">
            Log In
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
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={toggleMenu}
                className="text-gray-900 hover:text-orange-400 hover:border-b border-orange-400"
              >
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
