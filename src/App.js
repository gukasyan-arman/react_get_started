import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./styles/App.css";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
	return (
		<Router>
			<div className="navbar">
				<div className="navbar__links">
					<Link to="/about">О сайте</Link>
					<Link to="/posts">Записи</Link>
				</div>
			</div>
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/posts" element={<Posts />}></Route>
			</Routes>
		</Router>
	)
}

export default App;
