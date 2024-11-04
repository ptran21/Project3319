// catalog.js
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import ProductCard from './productCard';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

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

                    {/* Button group for Clear Search and Return */}
                    <div className="button-group">
                        <button onClick={() => setSearch('')} className="btn-clear">
                            Clear Search
                        </button>
                    </div>

                    <Link to="/cart" className="text-lg">
                        <FaShoppingCart className="text-black" size={48} />
                    </Link>
                </nav>
            </header>
            
            <section>
                <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Catalog;
