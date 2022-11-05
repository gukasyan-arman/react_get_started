import React from 'react';
import {
	Route,
	Routes,
	Navigate
  } from "react-router-dom";

import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

function AppRouter() {
	return (
		<Routes>
			<Route path="/about" element={<About />}></Route>
			<Route path="/posts" element={<Posts />}></Route>
			<Route path="/error" element={<Error />}></Route>
			<Route
				path="*"
				element={<Navigate to="/error" element={<Error />} />}
			/>
		</Routes>
	);
}

export default AppRouter;