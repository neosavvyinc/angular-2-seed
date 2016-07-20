import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import AppComponent from './ts/app.component';
import appRouteProvider from './ts/app.routes';
import appStoreProvider from './ts/app.store';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    appRouteProvider,
    appStoreProvider
]).catch(err => console.log(err));
