// App.js
import React from 'react';
import ProductCard from './productCard';
import './index.css';


function App() {
	const products = [
		{
			imageSrc:
				'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png',
			isNew: true,
			title: 'Beoplay M5 Bluetooth Speaker',
			price: 99.0,
			rating: 4,
		},
		{
			imageSrc:
				'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
			isNew: false,
			title: 'Apple Smart Watch 6 - Special Edition',
			price: 199.0,
			rating: 5,
		},
		// Add more products as needed
	];

	return (
		<div>
			<section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
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
								imageSrc={product.imageSrc}
								isNew={product.isNew}
								title={product.title}
								price={product.price}
								rating={product.rating}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
