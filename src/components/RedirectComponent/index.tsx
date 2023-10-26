import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectComponent: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return null; // Componente vazio, pois não precisa renderizar nada
};

export default RedirectComponent;
