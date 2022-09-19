import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Screens/Home";
function Navigation() {
	return (
		<>
			<Router>
				<Header></Header>
				<Routes>
					<Route exact path="/" element={<Home></Home>}></Route>
				</Routes>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default Navigation;
