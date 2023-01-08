import React from "react";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

const products = ({ products }) => {

	return (
		<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<img alt="Office" src={products.image} className="h-56 w-full object-cover" />

			<div className="bg-white p-4 sm:p-6">
				<time datetime="2022-10-10" className="block text-xs text-gray-500">
					10th Oct 2022
				</time>

				<Link to={`/product-details/${products.id}`}>
					<h3 className="mt-0.5 text-lg text-gray-900">{products.name}</h3>
				</Link>
				<li className="">{products.key_features.Display}</li>
				<li>{products.key_features.RAM}</li>
			</div>
		</article>
	);
};

export default products;
