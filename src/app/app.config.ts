import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withHashLocation,
  withPreloading,
} from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withPreloading(PreloadAllModules)
    ), // Thêm chế độ preloading và hash location
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
