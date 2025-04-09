import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // "admin" or "user"

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const login = ({ username, password }) => {
    // Simulated backend logic
    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", "admin");
      setIsLoggedIn(true);
      setUserRole("admin");
      return { success: true, role: "admin" };
    } else if (username === "user" && password === "1234") {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", "user");
      setIsLoggedIn(true);
      setUserRole("user");
      return { success: true, role: "user" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
