import React, { useState } from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SecurityHeaders from './components/SecurityHeaders';
import Dashboard from './components/Dashboard/Dashboard';
import { useAuth } from './contexts/AuthContext';

const AppContent = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const { user, logout } = useAuth();

  const handleShowDashboard = () => {
    setShowDashboard(true);
  };

  const handleBackToHome = () => {
    setShowDashboard(false);
  };

  const handleLogout = () => {
    logout();
    setShowDashboard(false);
  };

  if (showDashboard && user) {
    return <Dashboard user={user} onLogout={handleLogout} onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="App">
      <SecurityHeaders />
      <Header onShowDashboard={handleShowDashboard} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
