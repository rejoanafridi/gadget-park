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
		<div className="max-w-screen-xl mx-auto grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-4 mt-20">
			{product.map((products) => (
				<Products products={products} key={products.id} />
			))}
		</div>
	);
};

export default Home;
