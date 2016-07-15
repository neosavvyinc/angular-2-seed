import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import '../styles/global-styles.scss';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent],
    encapsulation: ViewEncapsulation.None,
    template:
        `
            <ns-navbar></ns-navbar>
            <main>
                <router-outlet></router-outlet>
            </main>
            <ns-footer></ns-footer>
        `
})

export class AppComponent {}
