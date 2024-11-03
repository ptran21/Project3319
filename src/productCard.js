// ProductCard.js
import React from 'react';
import './index.css';


function ProductCard({ imageSrc, isNew, title, price, rating }) {
	return (
		<div className="relative group p-4 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
			<div className="overflow-hidden rounded-t-lg aspect-w-1 aspect-h-1">
				<img
					className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
					src={imageSrc}
					alt={title}
				/>
			</div>
			{isNew && (
				<div className="absolute left-3 top-3">
					<p className="px-2 py-1 text-xs font-semibold text-white uppercase bg-red-500 rounded-full">
						New
					</p>
				</div>
			)}
			<div className="flex items-start justify-between mt-4">
				<div>
					<h3 className="text-sm font-semibold text-gray-900">
						<a href="#" title={title}>
							{title}
						</a>
					</h3>
					<div className="flex items-center mt-2 space-x-1">
						{[...Array(5)].map((_, index) => (
							<svg
								key={index}
								className={`w-4 h-4 ${
									index < rating
										? 'text-yellow-400'
										: 'text-gray-300'
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 .587l3.668 7.572L24 9.423l-6 5.854 1.417 8.26L12 18.897l-7.417 4.64L6 15.277 0 9.423l8.332-1.264z" />
							</svg>
						))}
					</div>
				</div>
				<div className="text-right">
					<p className="text-sm font-semibold text-gray-900">
						${price.toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;