import React, {useContext} from 'react';
import {
	Link,
  } from "react-router-dom";
import { AuthContext } from '../../../context/context';
import DeleteButton from '../button/DeleteButton';

function Navbar() {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link to="/about">О сайте</Link>
				<Link to="/posts">Записи</Link>
			</div>
			<DeleteButton
				onClick={logout}
			>
				Выйти
			</DeleteButton>
		</div>
	);
}

export default Navbar;