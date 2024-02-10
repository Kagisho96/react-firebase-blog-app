import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.js";
import { Provider } from "react-redux";

// import NavBar from "./components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/* <NavBar/> */}
        <App />
    </Provider>
)
