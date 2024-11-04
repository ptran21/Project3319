// Confirmation.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';

function Confirmation() {
    const { clearCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const { cart, cartTotal, formData } = location.state;

    const handleReturnToBrowse = () => {
        clearCart();
        navigate('/');
    };

    return (
        <div className="confirmation-view">
            <h2>Order Confirmation</h2>
            <h3>Purchased Items</h3>
            <div className="order-summary grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <p>{item.title} - ${item.price}</p>
                    </div>
                ))}
            </div>
            <h3>Total Amount: ${cartTotal.toFixed(2)}</h3>

            <h3>Shipping Information</h3>
            <p>Name: {formData.fullName}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address} {formData.address2 ? `, ${formData.address2}` : ''}</p>
            <p>{formData.city}, {formData.state} {formData.zip}</p>

            {/* <h3>Payment Information</h3>
            <p>Credit Card: **** **** **** {formData.creditCard.slice(-4)}</p> */}

            <div className="button-group">
                <button onClick={handleReturnToBrowse} className="btn-return">
                    Return to Browse
                </button>
            </div>
        </div>
    );
}

export default Confirmation;
