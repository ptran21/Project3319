// Shop.js
import React, { useState } from 'react';
import { useCart } from './cartContext';
import { useNavigate } from 'react-router-dom';

function Shop() {
    const { cart, addToCart, removeFromCart, cartTotal } = useCart();
    const navigate = useNavigate();

    // Form state to capture user information
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        creditCard: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = 'Full Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.creditCard || formData.creditCard.length < 16) errors.creditCard = 'Valid credit card is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';
        if (!formData.state) errors.state = 'State is required';
        if (!formData.zip || formData.zip.length !== 5) errors.zip = 'Valid 5-digit ZIP code is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCheckout = () => {
        if (validateForm()) {
            navigate('/confirmation', { state: { cart, cartTotal, formData } });
        }
    };

    return (
        <div className="cart-view">
            <h2>Shopping Cart</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item bg-white p-4 rounded-lg shadow-md">
                        <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p>Price per item: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        <div className="mt-2 flex space-x-2">
                            <button onClick={() => addToCart(item)} className="px-2 py-1 bg-red-500 text-white rounded">
                                +
                            </button>
                            <button onClick={() => removeFromCart(item)} className="px-2 py-1 bg-red-500 text-white rounded">
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="mt-6">Total Amount: ${cartTotal.toFixed(2)}</h3>

            {/* Checkout Form */}
            <div className="checkout-form">
                <h3>Payment Information</h3>
                <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
                {formErrors.fullName && <p className="error">{formErrors.fullName}</p>}
                
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                {formErrors.email && <p className="error">{formErrors.email}</p>}

                <input name="creditCard" placeholder="Credit Card" value={formData.creditCard} onChange={handleInputChange} />
                {formErrors.creditCard && <p className="error">{formErrors.creditCard}</p>}

                <input name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                {formErrors.address && <p className="error">{formErrors.address}</p>}

                <input name="address2" placeholder="Address 2" value={formData.address2} onChange={handleInputChange} />

                <input name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
                {formErrors.city && <p className="error">{formErrors.city}</p>}

                <input name="state" placeholder="State" value={formData.state} onChange={handleInputChange} />
                {formErrors.state && <p className="error">{formErrors.state}</p>}

                <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleInputChange} />
                {formErrors.zip && <p className="error">{formErrors.zip}</p>}

                <div className="button-group">
                    <button onClick={() => navigate('/')} className="btn-return">
                        Return
                    </button>
                    <button onClick={handleCheckout} className="btn-checkout">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Shop;
