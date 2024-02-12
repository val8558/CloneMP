import { useState, createContext, useContext } from "react";
import { getGameResult } from "../Service/report";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [apiData, setApiData] = useState(null);
  const navigate = useNavigate();

  const authenticateWithCode = async (gameCode) => {
    try {
      const response = await getGameResult(gameCode);

      if (response.data.success) {
        console.log("Autenticação bem-sucedida");
        console.log(response.data)
        setUser(response.data.user);
        setApiData(response.data);
        navigate ('/Report')
      } else {
        console.error("Falha na autenticação.");
      }
    } catch (error) {
      console.error("Erro ao verificar o código:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, apiData, authenticateWithCode}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
