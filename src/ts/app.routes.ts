import { provideRouter, RouterConfig } from '@angular/router';

import homeRoutes from './components/home/home.routes';
import sampleDisplayRoutes from './components/sampleDisplay/sampleDisplay.routes';
import repoLookupRoutes from './components/repoLookup/repoLookup.routes';

const routes: RouterConfig = [
    ...homeRoutes,
    ...sampleDisplayRoutes,
    ...repoLookupRoutes
];

const appRouterProviders = [
    provideRouter(routes)
];

export default appRouterProviders;