import { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";

const Feed = () => {
     const [products, setProducts] = useState([]);
     const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);
     useEffect(() => {
          fetch("/products.json")
               .then((res) => res.json())
               .then((data) => {
                    // Add rating stars to each product
                    const productsWithRatings = data.map((product) => ({
                         ...product,
                         rating: renderStars(product.number),
                    }));
                    setProducts(productsWithRatings);
                    console.log(productsWithRatings);
               });
     }, []);

     return (
          <>
               <div className="feed">
                    <h2>Headphones for you</h2>
                    <div className="products">
                         {products.map((product, idx) => (
                              <Link
                                   key={idx}
                                   className="product-card"
                                   to={`/product/${product.title}`}
                              >
                                   <img src={product.img} alt={product.alt} />
                                   <div className="title-and-price">
                                        <h3>{product.title}</h3>
                                        <strong>{product.price}</strong>
                                   </div>
                                   <div className="description-and-rating">
                                        <p>{product.description}</p>
                                        <span>{product.rating}</span>
                                   </div>
                              </Link>
                         ))}
                    </div>
               </div>
          </>
     );
};

export default Feed;
