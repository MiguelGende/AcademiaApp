import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sliderData = [
    { id: 1, title: 'Video 1', videoUrl: '/assets/videos/video1.mp4' },
    { id: 2, title: 'Video 2', videoUrl: '/assets/videos/video2.mp4' },
    { id: 3, title: 'Video 3', videoUrl: '/assets/videos/video3.mp4' },
  ];

  private categoriesData = [
    { id: 1, name: 'Categoría 1', icon: 'musical-notes' },
    { id: 2, name: 'Categoría 2', icon: 'library' },
    { id: 3, name: 'Categoría 3', icon: 'school' },
  ];

  private newsData = [
    { id: 1, title: 'Noticia 1', content: 'Contenido de la noticia 1' },
    { id: 2, title: 'Noticia 2', content: 'Contenido de la noticia 2' },
  ];

  getSliderData() {
    return this.sliderData;
  }

  getCategoriesData() {
    return this.categoriesData;
  }

  getNewsData() {
    return this.newsData;
  }
}
