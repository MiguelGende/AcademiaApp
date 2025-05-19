import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonInfiniteScrollContent,
  IonInfiniteScroll,
  IonItem,
  IonLabel,
  IonList,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar @if
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Indica que este es un componente standalone
  imports: [IonHeader, IonToolbar, CommonModule, IonContent, IonContent, IonHeader, IonMenu, IonMenuButton, IonToolbar, IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  sliderData: any[] = [];
  categoriesData: any[] = [];
  newsData: any[] = [];
  isLoggedIn: boolean = false;

  @ViewChild(IonMenu) menu!: IonMenu;


  constructor(private dataService: DataService, private authService: AuthService, private navController: NavController, private router: Router) {
    this.sliderData = this.dataService.getSliderData(); // Obtener los datos del servicio

    // Suscribirse al evento de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menu.close();
      }
    });
  }

  ngOnInit() {
    this.categoriesData = this.dataService.getCategoriesData();
    this.newsData = this.dataService.getNewsData();

    // Suscribirse al estado de autenticación
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn; // Actualiza el estado local
    });

    // Cargar los datos del carrusel
    this.sliderData = this.dataService.getSliderData();
  }

  nngAfterViewInit() {
    const swiperContainer = document.querySelector('swiper-container');
    const videos = swiperContainer?.querySelectorAll('video');
  
    if (videos) {
      videos.forEach((video: HTMLVideoElement) => {
        video.muted = true; // Asegurar que esté silenciado
        video.addEventListener('loadeddata', () => {
          console.log(`Video cargado: ${video.currentSrc}`);
          video.play().catch((error) => {
            console.error('Error al reproducir el video:', error);
          });
        });
      });
    } else {
      console.error('No se encontraron videos.');
    }
  }

  goToAnotherPage() {
    this.navController.navigateForward('/home');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}


//TODO Lógica para mostrar las noticias
/*
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: any[] = [];
  news: any[] = [];
  selectedCategoryId: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadCategories();
    this.loadNews();
  }

  loadCategories() {
    this.dataService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  loadNews() {
    this.dataService.getNews(this.selectedCategoryId!).subscribe((response) => {
      this.news = response.data;
    });
  }

  onCategorySelected(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.loadNews();
  }
}
*/