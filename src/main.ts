import { enableProdMode, importProvidersFrom } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';


//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// bootstrapApplication(AppComponent)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
});

/**
 * This new function 'provideHttpClient() has several benefits:
 * It aligns with Angular’s standalone architecture
 * It’s tree-shakable, meaning smaller bundle sizes
 * It’s more modular and composable, letting you add interceptors or features like JSONP or fetch-based transport

 */
