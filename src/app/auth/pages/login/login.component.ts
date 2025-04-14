import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    // Usar AuthService para "loguear" de forma ficticea
    const success = this.authService.login(this.username, this.password);

    if (success) {
      console.log("Usuario registrado: " + this.username);

      // Guardar el usuario en el servicio
      this.authService.setUser(this.username);

      // Redirigir a /tasks
      this.router.navigate(['/tasks']);

    } else {
      console.log("Usuario no válido: " + this.username);
      this.errorMessage = 'Usuario/contraseña incorrectos';
    }
  }

}
