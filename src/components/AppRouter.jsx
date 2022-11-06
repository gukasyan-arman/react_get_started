import React from 'react';
import {
	Route,
	Routes,
	Navigate
  } from "react-router-dom";

import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';

function AppRouter() {
	return (
		<Routes>
			<Route path="/about" element={<About />}></Route>
			<Route path="/posts" element={<Posts />}></Route>
			<Route path="/posts/:id" element={<PostIdPage />}></Route>
			<Route
				path="*"
				element={<Navigate to="/posts" element={<Posts />} />}
			/>
		</Routes>
	);
}

export default AppRouter;