import { provideRouter, RouterConfig } from '@angular/router';

import homeRoutes from './features/home/home.routes';
import sampleDisplayRoutes from './features/sampleDisplay/sampleDisplay.routes';
import repoLookupRoutes from './features/repoLookup/repoLookup.routes';

const routes: RouterConfig = [
    ...homeRoutes,
    ...sampleDisplayRoutes,
    ...repoLookupRoutes
];

const appRouteProvider = provideRouter(routes);

export default appRouteProvider;