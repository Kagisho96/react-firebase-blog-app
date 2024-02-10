import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

// import FullPageLoader from '../components/FullPageLoader.jsx';
// import {useState} from 'react';


// function LoginPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginType, setLoginType] = useState('login');

  
//     return (
//       <>
//         { isLoading && <FullPageLoader></FullPageLoader> }
        
//         <div className="container login-page">
//           <section>
//             <h1>Welcome to the Book App</h1>
//             <p>Login or create an account to continue</p>
//             <div className="login-type">
//               <button 
//                 className={`btn ${loginType == 'login' ? 'selected' : ''}`}
//                 onClick={()=>setLoginType('login')}>
//                   Login
//               </button>
//               <button 
//                 className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
//                 onClick={()=>setLoginType('signup')}>
//                   Signup
//               </button>
//             </div>
//             <form className="add-form login">
//                   <div className="form-control">
//                       <label>Email *</label>
//                       <input type="text" name="email" placeholder="Enter your email" />
//                   </div>
//                   <div className="form-control">
//                       <label>Password *</label>
//                       <input type="password" name="password" placeholder="Enter your password" />
//                   </div>
//                   {
//                     loginType == 'login' ?
//                     <button className="active btn btn-block">Login</button>
//                     : 
//                     <button className="active btn btn-block">Sign Up</button>
//                   }

//                   <p className="forgot-password">Forgot Password?</p>
                  
//               </form>
//           </section>
//         </div>
//       </>
//     )
//   }
  
//   export default LoginPage



function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState({});

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error);
        // ..
      });
  }
  function handleLogin(e) {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    setError(error);
  });
  }

  function PasswordReset() {
    const email = prompt("Please enter you email:")
    sendPasswordResetEmail(auth, email)
    alert("Email sent successfully")
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center">
        <div className="container px-4 py-8 bg-white rounded-lg">
          <section>
            <p className="text-xl uppercase mt-6 mb-5 font-semibold text-center">
              Login or create an account to continue
            </p>
            <div className="flex justify-center mt-4">
              <button
                className={`btn ${
                  loginType === "login"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
                } px-4 py-2 rounded-l-lg`}
                onClick={() => setLoginType("login")}
              >
                Login
              </button>
              <button
                className={`btn ${
                  loginType === "signup"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
                } px-4 py-2 rounded-r-lg`}
                onClick={() => setLoginType("signup")}
              >
                Signup
              </button>
            </div>
            <div className="flex items-center justify-center">
              <form className="mt-8 lg:w-[500px]">
                <div className="text-center">
                <div className="mb-6">
                    <input
                      type="diplayName"
                      placeholder="Your username"
                      name="diplayName"
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                      id="diplayName"
                      className="w-full border rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md focus:border-[#6a64f1] text-[#6B7280]"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      name="email"
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                      id="email"
                      className="w-full border rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md focus:border-[#6a64f1] text-[#6B7280]"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                      name="password"
                      id="password"
                      className="w-full border rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md focus:border-[#6a64f1] text-[#6B7280]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {loginType === "login" ? (
                    <button
                    onClick={(e) => {
                        handleLogin(e);
                      }}
                     className="btn btn-block bg-orange-500 text-white py-2 px-4 hover:bg-gray-800 hover:text-gray-100 rounded transition duration-300">
                      Login
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleSignup(e);
                      }}
                      className="btn btn-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100 transition duration-300"
                    >
                      Sign Up
                    </button>
                  )}
                </div>

                {/* error display */}

                {
                    error && 
                    <div className="text-red-600 flex justify-center items-center\">
                        {error.message}
                    </div>

                }

                <div className="flex items-center justify-center mt-4">
                  <p 
                  onClick={PasswordReset}
                  className="text-blue-600 mt-4 cursor-pointer">
                    Forgot Password?
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
