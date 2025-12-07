'use client';

import { useState } from 'react';
import Header from "src/components/header/Header"; 
import LoginScreen from 'src/components/login/LoginScreen';
import RegisterScreen from 'src/components/registro/RegisterScreen';

function LoginPage() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  
  const handleSwitchScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <>
      <Header />
      
      <div className="App" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#1E1E3F',
        paddingTop: '6rem'
      }}>
        {currentScreen === 'login' ? (
          <LoginScreen onSwitchToRegister={() => handleSwitchScreen('register')} />
        ) : (
          <RegisterScreen onSwitchToLogin={() => handleSwitchScreen('login')} />
        )}
      </div>
    </>
  );
}

export default LoginPage;