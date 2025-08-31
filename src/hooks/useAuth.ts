'use client';

import { useState, useCallback } from 'react';
import { apiClient, ApiError } from '@/lib/api';
import { AuthManager } from '@/lib/auth';
import { LoginCredentials, RegisterData, AuthResponse } from '@/types/auth';

interface UseAuthReturn {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const response: AuthResponse = await apiClient.login(credentials);
      AuthManager.setToken(response.token);
      AuthManager.redirectToDashboard();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (userData: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      const response: AuthResponse = await apiClient.register(userData);
      AuthManager.setToken(response.token);
      AuthManager.redirectToDashboard();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    AuthManager.logout();
  }, []);

  return {
    login,
    register,
    logout,
    loading,
    error,
    clearError,
  };
}