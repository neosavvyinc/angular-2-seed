import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import '../styles/global-styles.scss';

import NavbarComponent from './features/common/components/navbar/navbar.component';
import FooterComponent from './features/common/components/footer/footer.component';
import ErrorHandlerComponent from './features/common/features/errorHandler/errorHandler.component.ts'

@Component({
    selector: 'ns-ng2-app',
    directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent, ErrorHandlerComponent],
    template:
        `
            <ns-navbar></ns-navbar>
            <ns-error-handler></ns-error-handler>
            <main>
                <router-outlet></router-outlet>
            </main>
            <ns-footer></ns-footer>
        `,
    providers: [HTTP_PROVIDERS]
})

export default class AppComponent {}
