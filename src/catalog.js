// catalog.js
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import ProductCard from './productCard';
import Shop from './Shop';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(''); // Added search state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/items.json');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Filter products based on search input
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-coolBrown min-h-screen">
            <header>
                <nav className="flex justify-between items-center p-4">
                    {/* Search bar for filtering products */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-bar"
                    />
                    <button onClick={() => setSearch('')}>Clear Search</button>
                    <Link to="/cart" className="text-lg">
                        <FaShoppingCart className="text-black" size={48} />
                    </Link>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <section className="py-12 bg-coolBrown-100 sm:py-16 lg:py-20">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                {/* Display filtered products */}
                                <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                                    {filteredProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            {...product}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    }
                />
                <Route path="/cart" element={<Shop />} />
            </Routes>
        </div>
    );
}

export default Catalog;
