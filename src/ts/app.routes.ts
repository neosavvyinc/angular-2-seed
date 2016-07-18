import { provideRouter, RouterConfig } from '@angular/router';

import { homeRoutes } from './components/home/home.routes';
import { sampleDisplayRoutes } from './components/sampleDisplay/sampleDisplay.routes';
import { sampleFormRoutes } from './components/sampleForm/sampleForm.routes';

const routes: RouterConfig = [
    ...homeRoutes,
    ...sampleDisplayRoutes,
    ...sampleFormRoutes
];

export const appRouterProviders = [
    provideRouter(routes)
];