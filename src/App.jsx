import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Tags from "./components/Tags.jsx";
import Feed from "./components/Feed.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
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
               </Routes>
          </BrowserRouter>
     );
};

export default App;
