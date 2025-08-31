export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  patientId: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
}

