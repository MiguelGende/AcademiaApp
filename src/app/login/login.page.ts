import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonLabel, 
  IonCardContent, 
  IonCardTitle, 
  IonCardHeader, 
  IonItem, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { auth } from '../services/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, 
    IonCard, IonContent, IonHeader, IonTitle, IonToolbar, 
    IonInput, IonButton, CommonModule, FormsModule
  ]
})
export class LoginPage implements OnInit {


  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider(); // Crea una instancia del proveedor de Google
    try {
      const result = await signInWithPopup(auth, provider); // Abre la ventana emergente de Google
      const user = result.user;

      console.log('Usuario logueado:', user);

      // Guarda el estado de autenticación en el servicio
      const displayName = user.displayName || user.email || 'Usuario de Google';
      this.authService.setGoogleLogin(displayName);

      // Redirige al usuario a la página principal
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error al iniciar sesión con Google. Inténtalo de nuevo.');
    }
  }


  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  register() {
    console.log('Redirigiendo a la página de registro...');
    this.navCtrl.navigateForward('/register'); // Redirige a la página de registro si existe
  }

  goHome() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = '/home';
    }, 300);
  }
}