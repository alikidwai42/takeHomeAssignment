// App.tsx
import React from 'react';
import ChatApp from './chatApp';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>AI Chat App</h1>
      <ChatApp />
    </div>
  );
};

export default App;
