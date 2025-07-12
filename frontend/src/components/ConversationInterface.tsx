import React, { useState, useEffect } from 'react';
import { conversationService } from '../services/api';
import { ConversationResponse, UserInfo, Message } from '../types';

interface ConversationInterfaceProps {
  userInfo: UserInfo;
}

const ConversationInterface: React.FC<ConversationInterfaceProps> = ({ userInfo }) => {
  const [currentResponse, setCurrentResponse] = useState<string>('');
  const [currentButtons, setCurrentButtons] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Message de bienvenue initial
    handleInitialMessage();
  }, []);

  const handleInitialMessage = async () => {
    setIsLoading(true);
    try {
      const response = await conversationService.sendMessage('Bonjour');
      setCurrentResponse(response.response);
      setCurrentButtons(response.buttons);
      setMessages([{
        content: response.response,
        type: 'assistant',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setIsLoading(true);
    const userMessage: Message = {
      content: message,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      const response = await conversationService.sendMessage(message);
      setCurrentResponse(response.response);
      setCurrentButtons(response.buttons);
      
      const assistantMessage: Message = {
        content: response.response,
        type: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = (button: any) => {
    handleSendMessage(button.text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-marianne-blue text-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Marianne</h1>
          <div className="text-sm">
            <span>Bonjour {userInfo.prenom}</span>
          </div>
        </div>
      </div>

      {/* Conversation Area */}
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="max-w-2xl w-full">
          {/* Current Response Display */}
          <div className="text-center mb-8">
            <div className="marianne-card">
              <div className="text-lg text-marianne-blue mb-4">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-marianne-blue"></div>
                    <span className="ml-3">Marianne réfléchit...</span>
                  </div>
                ) : (
                  <p className="text-xl leading-relaxed">{currentResponse}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {!isLoading && currentButtons.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {currentButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button)}
                  className="marianne-button-secondary text-center"
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Comment puis-je vous aider ?"
                className="marianne-input flex-1"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="marianne-button px-6"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConversationInterface; 