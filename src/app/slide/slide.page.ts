import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';  // Importa el servicio Router para la navegación

register();

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlidePage implements OnInit {

  constructor(private router: Router) {  // Inyecta el Router en el constructor
  }

  ngOnInit() {
  }

  // Función que se ejecuta al hacer clic en el botón
  goHome() {
    this.router.navigate(['/home']);  // Navega a la ruta '/home'
  }
}
