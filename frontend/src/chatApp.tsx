// ChatApp.tsx
import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ChatContainer = styled.div`
  height: 300px;
  overflow-y: scroll;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

interface MessageItem {
  content: string;
  isUser: boolean;
}

const ChatApp: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<MessageItem[]>([]);
  
    const sendMessage = async () => {
      // Simulate API call to the backend
      const userMessage = { content: input, isUser: true };
      setMessages([...messages, userMessage]);
  
      try {
        // Make a POST request to the backend API
        const response = await axios.post('http://localhost:3000/response/res', { input });
        const aiResponse = { content: response.data, isUser: false };
        setMessages([...messages, aiResponse]);
      } catch (error) {
        console.error('Error sending message to backend:', error);
      }
  
      setInput('');
    };

  return (
    <Container>
      <ChatContainer>
        {messages.map((message, index) => (
          <Message key={index} style={{ alignSelf: message.isUser ? 'flex-end' : 'flex-start' }}>
            {message.content}
          </Message>
        ))}
      </ChatContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputContainer>
    </Container>
  );
};

export default ChatApp;
