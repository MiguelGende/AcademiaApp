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

// TODO Obtener noticias de la base de datos
/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Obtener categorías desde el backend
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  // Obtener noticias (todas o filtradas por categoría)
  getNews(categoryId?: number): Observable<any> {
    let params = new HttpParams();
    if (categoryId) {
      params = params.set('category_id', categoryId.toString());
    }

    return this.http.get(`${this.apiUrl}/news`, { params });
  }
}
*/
