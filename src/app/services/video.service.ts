import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Usamos 'of' para simular una respuesta asíncrona

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoUrl = 'https://v.ftcdn.net/05/18/06/86/700_F_518068625_sVdMqMPp5tjjY3jrG8swrmMYa7Juft58_ST.mp4'; // URL simulada del vídeo

  constructor() {}

  // Método para obtener la URL del vídeo (simulando una llamada a una API)
  getVideoUrl(): Observable<any> {
    return of({ videoUrl: this.videoUrl }); // Devuelve un objeto con la URL del vídeo
  }
}