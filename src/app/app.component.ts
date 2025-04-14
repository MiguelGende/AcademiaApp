import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, settings, library,logoGoogle, musicalNotes, school } from 'ionicons/icons';


addIcons({
  'logo-google': logoGoogle,
});

// Registra los íconos necesarios
addIcons({
  person,
  settings,
  library,
  musicalNotes,
  school,
});


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
