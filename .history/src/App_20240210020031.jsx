import AddBookPage from "./views/AddBookPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import SingleBookPage from "./views/SingleBookPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectUsers } from "./store/";

// import BooksPage from './views/BooksPage.jsx';

function App() {

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="add-book" element={<AddBookPage />} />
          <Route path="book/:id" element={<SingleBookPage />} />
        </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
