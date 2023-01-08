import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "../layout/Main/Main";
import ProductDetails from "../components/Products/productDetails";

const routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product-details" element={<ProductDetails />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default routes;
