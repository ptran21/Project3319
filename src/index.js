// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary routing components
import { CartProvider } from "./cartContext"; // Import the context
import Catalog from "./catalog";
import Shop from "./Shop"; // Ensure Shop component is imported here

ReactDOM.render(
    <CartProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/cart" element={<Shop />} />
            </Routes>
        </Router>
    </CartProvider>,
    document.getElementById("root")
);
