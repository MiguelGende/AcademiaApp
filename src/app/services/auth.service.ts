import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Observable para el estado de autenticación
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Verifica si el usuario ya está logueado al iniciar la aplicación
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(isLoggedIn);
  }

  login(username: string, password: string): boolean {
    // Simulación de validación de credenciales
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      this.isLoggedInSubject.next(true); // Actualiza el estado
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.isLoggedInSubject.next(false); // Actualiza el estado
  }

  getUserName(): string | null {
    return localStorage.getItem('username');
  }

  // Método para actualizar el estado cuando se inicia sesión con Google
  setGoogleLogin(userDisplayName: string): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', userDisplayName);
    this.isLoggedInSubject.next(true); // Actualiza el estado
  }

}