// App.js
import React, { useEffect, useState } from 'react';
import './index.css';
import ProductCard from './productCard';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/items.json'); // Path is relative to the public folder
				if (!response.ok) {
					console.log('Failed to fetch products');
					throw new Error('Failed to fetch products');
				}
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log('Failed to fetch products');
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="bg-coolBrown min-h-screen">
				<div>
					<section className="py-12 bg-coolBrown-100 sm:py-16 lg:py-20">
						<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
							<div className="max-w-md mx-auto text-center">
								<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
									Our featured items
								</h2>
								<p className="mt-4 text-base text-gray-600">
									Discover the latest in tech and style.
								</p>
							</div>

							<div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
								{products.map((product, index) => (
									<ProductCard
										key={index}
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
				</div>
		</div>
	);
}

export default App;
