import React, { useEffect, useState } from "react";
import Products from "../../components/Products/products";
const Home = () => {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch("/api/products.json")
			.then((response) => response.json())
			.then((data) => setProduct(data));
	}, []);
	return (
		<div className="max-w-screen-xl mx-auto">
			<div className="btn-group flex gap-4">
				<button
					className=" mt-5 inline-block rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
					href="/download"
				>
					Stock
				</button>
				<button
					className=" mt-5 inline-block rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
					href="/download"
				>
					AMD
				</button>
				<button
					className=" mt-5 inline-block rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
					href="/download"
				>
					INTEL
				</button>
			</div>
			<div className=" grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-4 mt-20">
				{product.map((products) => (
					<Products products={products} key={products.id} />
				))}
			</div>
			<div className="pagination mt-10">
				<ol class="flex justify-center gap-1 text-xs font-medium">
					<li>
						<a
							href="#"
							class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
						>
							<span class="sr-only">Prev Page</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3 w-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</li>

					<li>
						<a
							href="#"
							class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
						>
							1
						</a>
					</li>

					<li class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
						2
					</li>

					<li>
						<a
							href="#"
							class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
						>
							3
						</a>
					</li>

					<li>
						<a
							href="#"
							class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
						>
							4
						</a>
					</li>

					<li>
						<a
							href="#"
							class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
						>
							<span class="sr-only">Next Page</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3 w-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Home;
