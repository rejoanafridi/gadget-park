import "./App.css";
import Navbar from "./pages/Navbar/navbar";
import Footer from "./pages/Footer/footer";
import ProductDetails from "./components/Products/productDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/products";
import Main from "./layout/Main/Main";
import Home from "./pages/Home/Home";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/product-details/:id" element={<ProductDetails />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
