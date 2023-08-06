import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // TODO: comprobar si el usaurio esta logueado
  }, []);

  const login = async (accessToken) => {
    console.log("Login context");
    console.log(accessToken);
  };

  const data = {
    accessToken: token,
    user,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
