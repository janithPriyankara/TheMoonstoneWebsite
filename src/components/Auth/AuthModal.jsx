import React, { useState } from 'react';
import { X } from 'lucide-react';
import Login from './Login';
import Signup from './Signup';

const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const handleLoginSuccess = (user) => {
    onAuthSuccess(user);
    onClose();
  };

  const handleSignupSuccess = (user) => {
    onAuthSuccess(user);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 z-10"
        >
          <X className="h-5 w-5" />
        </button>
        
        {isLogin ? (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onSwitchToSignup={() => setIsLogin(false)}
            onClose={onClose}
          />
        ) : (
          <Signup
            onSignupSuccess={handleSignupSuccess}
            onSwitchToLogin={() => setIsLogin(true)}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
