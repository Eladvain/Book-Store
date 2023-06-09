
import './App.css';
import SearchBar from './components/SearchBar';
import Author from './components/Author'
import ShopingCart from './components/ShopingCart';
import BooksList from './components/BooksList';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    // <div className="App">
    //   <SearchBar/>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchBar />} />
      <Route path="author" element={<Author />} />
      <Route path="shoppingCart" element={<ShopingCart />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
