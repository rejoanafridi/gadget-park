import "./App.css";
import Navbar from "./pages/Navbar/navbar";
import Footer from "./pages/Footer/footer";
import ProductDetails from "./components/Products/productDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddProduct from "./dashboard/addProduct";
import ListProduct from "./dashboard/productList";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/add-product" element={<AddProduct />}></Route>
				<Route path="/list-product" element={<ListProduct />}></Route>
				<Route path="/product-details/:id" element={<ProductDetails />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
