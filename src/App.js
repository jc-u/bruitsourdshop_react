import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Product from "./components/Product"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from "./redux/store"

function App() {
  return (

  <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
