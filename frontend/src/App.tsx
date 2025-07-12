import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import ConversationInterface from './components/ConversationInterface';
import { UserInfo } from './types';

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleLogin = (user: UserInfo) => {
    setUserInfo(user);
  };

  return (
    <div className="App">
      {userInfo ? (
        <ConversationInterface userInfo={userInfo} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App; 