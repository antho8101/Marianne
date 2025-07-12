import axios from 'axios';
import { ConversationResponse, UserInfo } from '../types';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  async connectWithFranceConnect(): Promise<{ success: boolean; user_info: UserInfo; message: string }> {
    const response = await api.post('/auth/france-connect');
    return response.data;
  },
};

export const conversationService = {
  async sendMessage(message: string): Promise<ConversationResponse> {
    const response = await api.post('/conversation', { message });
    return response.data;
  },
};

export const userService = {
  async getUserInfo(): Promise<UserInfo> {
    const response = await api.get('/user/info');
    return response.data;
  },
}; 