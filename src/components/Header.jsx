import "./header.css";
const Header = () => {
     return (
          <header>
               <nav>
                    <h1 className="logo">ShopCart</h1>
                    <ul>
                         <li>categories</li>
                         <li>deals</li>
                         <li>whats new</li>
                         <li>delivery</li>
                    </ul>
               </nav>
               <div className="container_search_user_cart">
                    <div className="searchBox">
                         <input
                              type="text"
                              name="products"
                              placeholder="search products"
                         />
                         <img
                              src={"../public/assets/images/search_icon.png"}
                              className="searchIcon"
                              alt="search_icon"
                         />
                    </div>

                    <div className="account">
                         <img
                              src="../public/assets/images/user_icon.png"
                              className="userIcon"
                              alt="user_icon"
                         />
                         <span>Account</span>
                    </div>
                    <div className="cart">
                         <img
                              src="../public/assets/images/cart_icon.png"
                              className="cartIcon"
                              alt="cart_icon"
                         />
                         <span>Cart</span>
                    </div>
               </div>
          </header>
     );
};

export default Header;
