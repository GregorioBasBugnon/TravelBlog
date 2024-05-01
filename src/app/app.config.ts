import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([errorHandlerInterceptor]), withFetch())]
}
