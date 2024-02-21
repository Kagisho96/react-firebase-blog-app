import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.js";
import { Provider } from "react-redux";

// const Router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App/>,
//       children:[
//         {
//           path: "/blogs",
//           element: <Blogs/>
//         },
//         {
//           path: "/login",
//           element: <LoginPage/>
//         },
//         {
//           path: "/about",
//           element: <About/>
//         },
//         {
//           path: "/services",
//           element: <Services/>
//         },
//         {
//           path: "/contact",
//           element: <Contact/>
//         },
//         {
//           path: "/blogs",
//           element: <Blog/>
//         },
//         {
//           path: "/",
//           element: <Home/>
//         },
//         {
//           path: "/blogs/:id",
//           element: <SingleBlog/>,
//           loader: ({params}) => fetch(`http://localhost:8080/blogs/${params.id}`)
//         }
//       ]
//     }
//   ])
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <RouterProvider router={Router}/>
//     </React.StrictMode>,
//   )
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
