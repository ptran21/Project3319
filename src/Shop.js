// Shop.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

const shop = () => {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Fetch the product catalog from products.json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./items.json"); // Make sure products.json is in the public folder
      const data = await response.json();
      setCatalog(data);
    };
    fetchData();
  }, []);

  // Add item to cart
  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  // Remove item from cart
  const removeFromCart = (el) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    setCart(updatedCart);
  };

  // Calculate total price
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cart]);

  // Count the number of items in the cart for a specific product
  const howManyofThis = (id) => {
    const hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  };

  // Map the catalog to product display cards
  const listItems = catalog.map((el) => (
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image} alt={el.title} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          <button
            class="btn btn-light"
            onClick={() => removeFromCart(el)}
          >
            - 
          </button>{" "}
          <button
            class="btn btn-light"
            onClick={() => addToCart(el)}
          >
            + 
          </button>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>{howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  // Map the cart items to display in the cart section
  const cartItems = cart.map((el, index) => (
    <div key={index} class="row main align-items-center">
      <div class="col-2">
        <img class="img-fluid" src={el.image} alt={el.title} width={150} />
      </div>
      <div class="col">
        {el.title} - ${el.price}
      </div>
    </div>
  ));

  return (
    <div>
      STORE SE/ComS3190
      <div class="card">
        <div class="row">
          {/* HERE, IT IS THE SHOPING CART */}
            <div class="col-md-8 cart">
              <div class="title">
                <div class="row">
                    <div class="col">
                      <h4>
                      <b>Shopping Cart</b>
                      </h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">
                      <h4>
                      <b>Products selected {cart.length}</b>
                      </h4>
                    </div>
                    <div class ="col align-self-center text-right text-muted">
                      <h4>
                      <b>Order total: ${cartTotal}</b>
                      </h4>
                    </div>
                  </div>
              </div>
            <div>{listItems}</div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default shop;
