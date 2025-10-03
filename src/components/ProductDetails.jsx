import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
     const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);
     const { title } = useParams();
     const [product, setProduct] = useState([]);
     const [match, setMatch] = useState({});

     useEffect(() => {
          fetch("/products.json")
               .then((res) => res.json())
               .then((data) => {
                    // Add rating stars to each product
                    const productsWithRatings = data.map((product) => ({
                         ...product,
                         rating: renderStars(product.number),
                    }));
                    setProduct(productsWithRatings);
               });
     }, []);

     useEffect(() => {
          const MatchItem = product.find((item) => item.title === title);
          setMatch(MatchItem);
     }, [product, title]);

     return (
          <div className="product_details">
               <div className="container_images">
                    <img src={match?.img} alt={match?.alt} />
                    <div className="images">
                         <img src={match?.img} alt={match?.alt} />
                         <img src={match?.img} alt={match?.alt} />
                         <img src={match?.img} alt={match?.alt} />
                         <img src={match?.img} alt={match?.alt} />
                    </div>
               </div>
               <div className="product_info">
                    <h2>{match?.title}</h2>
                    <p>{match?.description}</p>
                    <h5>{match?.rating}</h5>
                    <h4>{match?.price}</h4>
                    <div className="quantity_info">
                         <span>Quantity:</span>
                         <div className="quantity">
                              <button>-</button>
                              <span>0</span>
                              <button>+</button>
                         </div>
                         <span>0 items available</span>
                    </div>
                    <div className="action_buttons">
                         <button className="add_to_cart">Add to Cart</button>
                         <button className="buy_now">Buy Now</button>
                    </div>
                    <div className="delivery_and_return">
                         <div className="delivery">
                              <img
                                   src="../assets/images/car_icon.png"
                                   alt="car_icon"
                              />
                              <h3>free delivery</h3>
                         </div>
                         <div className="return">
                              <img
                                   src="../assets/images/car_icon.png"
                                   alt="file_icon"
                              />
                              <h3>return delivery</h3>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetails;
