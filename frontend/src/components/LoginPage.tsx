import React from 'react';
import { authService } from '../services/api';
import { UserInfo } from '../types';

interface LoginPageProps {
  onLogin: (userInfo: UserInfo) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFranceConnect = async () => {
    setIsLoading(true);
    try {
      const result = await authService.connectWithFranceConnect();
      if (result.success) {
        onLogin(result.user_info);
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="marianne-card max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-marianne-blue mb-2">Marianne</h1>
          <p className="text-lg text-gray-600">IA Républicaine</p>
        </div>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Connectez-vous avec votre compte France Connect pour accéder à tous les services publics.
          </p>
        </div>

        <button
          onClick={handleFranceConnect}
          disabled={isLoading}
          className="marianne-button w-full flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Se connecter avec France Connect
            </>
          )}
        </button>

        <div className="mt-6 text-sm text-gray-500">
          <p>Votre identité est vérifiée de manière sécurisée</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 