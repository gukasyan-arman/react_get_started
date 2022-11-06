import React from 'react';
import {
	Route,
	Routes,
	Navigate
  } from "react-router-dom";
import { routes } from '../router/Routes';

function AppRouter() {
	return (
		<Routes>
			{routes.map(route =>
				<Route 
					path={route.path} 
					element={route.component} 
				/>
			)}
		</Routes>
	);
}

export default AppRouter;