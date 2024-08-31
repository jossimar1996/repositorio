import { createContext, useState } from "react";
import { authUsers } from "../service/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const userStorage = JSON.parse(localStorage.getItem("proyecto_g20.user")) || {};

	const [user, setUser] = useState(userStorage);

	function login(username, pass) {
		const authUser = authUsers.find(
			(user) => user.username === username && user.pass === pass
		);
		if (authUser !== undefined) {
			localStorage.setItem("proyecto_g20.user", JSON.stringify(authUser));
			setUser(authUser);
			return true;
		}
		return false;
	}

	function logout() {
		localStorage.removeItem("proyecto_g20.user");
		setUser({});
		window.location.href = "/";
	}

	function isAuth() {
		return user.name ? true : false;
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
