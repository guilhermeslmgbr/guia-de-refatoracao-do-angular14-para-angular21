import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // 1. Certifique-se de importar AppComponent

bootstrapApplication(AppComponent, appConfig) // 2. Troque App por AppComponent
  .catch((err) => console.error(err));
