import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import AppComponent from './ts/app.component';
import appRouterProviders from './ts/app.routes';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders
]).catch(err => console.log(err));
