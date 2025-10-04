import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Tags from "./components/Tags.jsx";
import Feed from "./components/Feed.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Cart from "./components/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Example cart state (replace with your actual state management)
import React, { useState } from "react";

const App = () => {
     // Example cart state, replace with your actual cart logic
     const [cart, setCart] = useState([]);

     return (
          <BrowserRouter>
               <Header />
               <Routes>
                    <Route
                         path="/"
                         element={
                              <>
                                   <Hero />
                                   <Tags />
                                   <Feed />
                              </>
                         }
                    />
                    <Route
                         path="/product/:title"
                         element={<ProductDetails />}
                    />
                    <Route path="/cart" element={<Cart cart={cart} />} />
               </Routes>
          </BrowserRouter>
     );
};

export default App;
