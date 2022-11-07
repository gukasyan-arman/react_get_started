import React, { useContext } from 'react';
import {
	Route,
	Routes
  } from "react-router-dom";
import { AuthContext } from '../context/context';
import { publicRoutes, privateRoutes } from '../router/Routes';

function AppRouter() {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	console.log(isAuth)
	return (
		isAuth
		?
		<Routes>
			{privateRoutes.map(route =>
				<Route 
					path={route.path} 
					element={route.component}
					key={route.path}
				/>
			)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route =>
				<Route 
					path={route.path} 
					element={route.component}
					key={route.path}
				/>
			)}
		</Routes>
	);
}

export default AppRouter;