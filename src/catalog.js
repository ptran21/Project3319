// catalog.js
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart and arrow icons
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import ProductCard from './productCard';
import Shop from './Shop'; // Your Shop component

function Catalog() {
	const [products, setProducts] = useState([]);

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

	return (
		<div className="bg-coolBrown min-h-screen">
			<header>
				<nav className="flex justify-between items-center p-4">
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
								<div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
									{products.map((product) => (
										<ProductCard
											key={product.id}
											image={product.image}
											title={product.title}
											price={product.price}
											description={product.description}
											category={product.category}
										/>
									))}
								</div>
							</div>
						</section>
					}
				/>
				{/* Cart route displaying the Shop component */}
				<Route path="/cart" element={<Shop />} />
			</Routes>
		</div>
	);
}

export default Catalog;
