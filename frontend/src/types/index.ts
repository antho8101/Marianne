export interface UserInfo {
  nom: string;
  prenom: string;
  date_naissance: string;
  numero_securite_sociale: string;
  adresse: string;
  email: string;
}

export interface Button {
  text: string;
  action: string;
}

export interface ConversationResponse {
  response: string;
  buttons: Button[];
  user_info?: UserInfo;
}

export interface Message {
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
} 