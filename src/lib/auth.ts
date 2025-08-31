
export class AuthManager {
  private static readonly TOKEN_KEY = 'authToken';

  static setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  static removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  static logout(): void {
    this.removeToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }

  static redirectToLogin(): void {
    if (typeof window !== 'undefined') {
      window.location.href = '/patient-portal';
    }
  }

  static redirectToDashboard(): void {
    if (typeof window !== 'undefined') {
      window.location.href = '/patient-portal/dashboard';
    }
  }
}