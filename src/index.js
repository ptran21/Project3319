// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./cartContext";
import Catalog from "./catalog";
import Shop from "./Shop";

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
