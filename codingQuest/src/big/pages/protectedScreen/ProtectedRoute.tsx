import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Api from '../../../api/api';
import { getClientAuthCookie } from '../../components/utils/clientCookie';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);


  async function validateJwt(token: string) {

    const response = await fetch(Api('user/'), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })

    if (!response) {
      window.location.href = '/login';
      throw new Error("Token invalido!")
    }
  }

  useEffect(() => {
    const token = getClientAuthCookie();

    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    validateJwt(token)

    setIsAuthenticated(true);
  }, []);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>; // Loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
