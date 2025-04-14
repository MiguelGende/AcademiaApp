import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Se inyecta a nivel root, accesible para todo el proyecto
})

export class AuthService {
    // BehaviorSubject almacena y emite el nombre de usuario
    private userSubject = new BehaviorSubject<string | null>(null);
    
    private isLoggedIn = false;
    
    // Exponemos como un Observable de solo lectura
    readonly user$: Observable<string | null> = this.userSubject.asObservable();

    constructor() {}


    // Se llama esta función cuando el login es exitoso
    setUser(username: string) {
        this.userSubject.next(username);
    }

    // Se llama para limpiar la sesión
    clearUser() {
        this.userSubject.next(null);
    }

    // Opcional: método para obtener el valor actual
    get currentUser(): string | null {
        return this.userSubject.value;
    }

    // Simulamos login
    login(username: string, password: string): boolean {
        // Lógica simple, si user y pass no están vacíos, se considera login exitoso
        if (username && password) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }

    logout() {
        this.isLoggedIn = false;
    }

    userIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }
}


