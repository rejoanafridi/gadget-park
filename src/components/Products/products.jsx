import React from "react";
import { HiEye } from "react-icons/hi";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const products = ({ products }) => {
	return (
		<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<img
				alt="Office"
				src={products.image}
				className="h-56 w-full object-cover"
			/>

			<div className="bg-white p-4 sm:p-6">
				<time datetime="2022-10-10" className="block text-xs text-gray-500">
					10th Oct 2022
				</time>

				<Link to={`/product-details/${products.id}`}>
					<h3 className="mt-0.5 text-lg  text-indigo-700">{products.name}</h3>
				</Link>
				<li className="text-xs">{products.key_features.Display}</li>
				<li className="text-xs">{products.key_features.RAM}</li>
				<span className="flex gap-2 mt-5">
					views <HiEye size={23} />
				</span>

				<button
					className="flex mt-5 justify-center justify-left mx-auto inline-block  rounded border border-current px-3 py-2 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
					href="/download"
				>
					<BiCart size={23} />
					Buy Now
				</button>
			</div>
		</article>
	);
};

export default products;
