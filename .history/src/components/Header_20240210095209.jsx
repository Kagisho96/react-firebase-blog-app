import "./index.css";
import App from "./App.jsx";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import store from "./store/store.js";
import { signOut } from "firebase/auth";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { auth } from "../firebase/config";
import { setUser } from "../store/usersSlice.js";

// import { signOut } from "firebase/auth";
// import { useState } from "react";
// import { FaBars, FaXmark } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { auth } from "../firebase/config";
// import { setUser } from "../store/usersSlice.js";

// function Header({ pageTitle }) {
//   const dispatch = useDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeNavItem, setActiveNavItem] = useState("/");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { path: "/", link: "Home" },
//     { path: "/blogs", link: "Blogs" },
//     { path: "/about", link: "About" },
//     { path: "/services", link: "Services" },
//     { path: "/contact", link: "Contact" },
//   ];

//   function handleLogOut() {
//     if (confirm("Are you sure you want to log out?")) {
//       signOut(auth)
//       .then(() => {
//         dispatch(
//           setUser(null)
//         );
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//     }

//   }

//   return (
//     <>
//       <h1>{pageTitle}</h1>

//       <header className="bg-black text-white fixed left-0 right-0 top-0 z-50">
//         <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
//           <a href="" className="text-white font-bold text-xl">
//             Pitsi<span className="text-orange-400">KM</span>
//           </a>

//           <ul className="md:flex gap-12 text-lg hidden">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <NavLink
//                   to="#"
//                   className={
//                     item.path === activeNavItem
//                       ? "text-orange-500 hover:border-b border-orange-400 underline-offset-4"
//                       : "text-white"
//                   }
//                   onClick={() => setActiveNavItem(item.path)}
//                 >
//                   {item.link}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           <div className="text-white lg:flex gap-6 items-center mr-8 hidden">
//             <div className="text-white hover:text-orange-400">
//               <NavLink to="/add-book">
//                 <button className="btn">Add Book +</button>
//               </NavLink>
//             </div>
//             <button
//               onClick={handleLogOut}
//               className="bg-orange-400 hover:bg-gray-200 py-2 px-4 text-gray-100 hover:text-gray-900 rounded-md font-medium transition-all duration-200 ease-in"
//             >
//               Log Out
//             </button>
//           </div>

//           <div className="curser-pointer md:hidden">
//             <button onClick={toggleMenu}>
//               {isMenuOpen ? (
//                 <FaXmark className="w-5 h-5" />
//               ) : (
//                 <FaBars className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </nav>

//         <div className="">
//           <ul
//             className={`"md:hidden gap-12 text-lg block spacing-y-4 px-4 py-6 mt-14 bg-white" ${
//               isMenuOpen
//                 ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 bg-orange-50"
//                 : "hidden"
//             }`}
//           >
//             {navItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to="#"
//                 onClick={toggleMenu}
//                 className="text-gray-900 hover:text-orange-400 hover:border-b border-orange-400"
//               >
//                 {item.link}
//               </NavLink>
//             </li>
//           ))}
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;



function Header({ pageTitle }) {
  const dispatch = useDispatch();
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

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(() => {
          dispatch(setUser(null));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <h1>{pageTitle}</h1>

      <header className="bg-black text-white fixed left-0 right-0 top-0 z-50">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">
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

          <div className="cursor-pointer md:hidden">
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
            className={`md:hidden gap-12 text-lg block spacing-y-4 px-4 py-6 mt-14 bg-white ${
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
    </>
  );
}

const routes = (
  <Provider store={store}>
    <Router>
      <Header pageTitle="Your Page Title" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/blogs/:id" component={SingleBlog} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
