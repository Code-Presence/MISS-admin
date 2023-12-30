import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


interface IRedirectComponentProps {
  path: string;
}

function RedirectComponent({path}: IRedirectComponentProps) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${path}`);
    }, []);

    return null; // Componente vazio, pois não precisa renderizar nada
}

export default RedirectComponent;
