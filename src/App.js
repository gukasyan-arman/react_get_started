import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/context";

function App() {

	useEffect(() => {
		if(localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])

	const [isAuth, setIsAuth] = useState(false);
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<Router>
				<Navbar />
				<AppRouter />
			</Router>
		</AuthContext.Provider>
	)
}

export default App;
