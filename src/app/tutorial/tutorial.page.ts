import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';



register();

@Component({
  selector: 'app-slide',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialPage implements OnInit {
  slides = [
    { title: 'Bienvenido', description: 'Esta es la primera pantalla del tutorial.'},
    { title: 'Explora', description: 'Descubre cursos y contenido exclusivo.' },
    { title: 'Disfruta', description: 'Aprende música de forma divertida.' },
  ];
  

  constructor(private router: Router) { }


  finishTutorial() {
    localStorage.setItem('tutorialSeen', 'true');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    console.log('Slide page initialized');
  }

  

  skipIntro() {
    this.router.navigateByUrl('/home');
  }
}