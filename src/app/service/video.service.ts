import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  // Videos de muestra para la simulación
  private mockVideos: Video[] = [
    {
      id: '1',
      title: 'Video de demostración 1',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      description: 'Video de demostración de código abierto "Big Buck Bunny"'
    },
    {
      id: '2',
      title: 'Video de demostración 2',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      description: 'Video de demostración de código abierto "Elephant\'s Dream"'
    },
    {
      id: '3',
      title: 'Video de demostración 3',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      description: 'Video de demostración de código abierto "For Bigger Blazes"'
    }
  ];

  constructor() { }

  /**
   * Obtiene una lista de videos desde la API
   * Para este ejemplo, devolvemos videos simulados
   */
  getVideos(): Observable<Video[]> {
    // Para la simulación, devolvemos los videos de muestra
    return of(this.mockVideos);
  }

  /**
   * Obtiene un video específico por su ID
   * @param id ID del video a obtener
   */
  getVideoById(id: string): Observable<Video> {
    // Para la simulación, buscamos en los videos de muestra
    const video = this.mockVideos.find(v => v.id === id);
    // Aseguramos que siempre devolvemos un Video válido o lanzamos error
    if (!video) {
      console.error(`Video con id=${id} no encontrado`);
      return of(this.mockVideos[0]); // Devolvemos el primer video como fallback
    }
    return of(video);
  }

  /**
   * Obtiene el video destacado para reproducir en bucle en la página principal
   */
  getFeaturedVideo(): Observable<Video> {
    // Para la simulación, devolvemos el primer video
    return of(this.mockVideos[0]);
  }
}
