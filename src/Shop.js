// shop.js
import React from 'react';
import { useCart } from './cartContext'; // Create a context to manage the cart

function Shop() {
	const { cart, addToCart, removeFromCart, cartTotal } = useCart(); // Using context

	return (
		<div className="cart">
			<h2>Shopping Cart</h2>
			{cart.map((item) => (
				<div key={item.id} className="cart-item">
					<img src={item.image} alt={item.title} />
					<p>
						{item.title} - ${item.price}
					</p>
					<button onClick={() => removeFromCart(item)}>-</button>
					<button onClick={() => addToCart(item)}>+</button>
				</div>
			))}
			<h3>Total: ${cartTotal}</h3>
			<button className="checkout-button">Checkout</button>
		</div>
	);
}

export default Shop;
