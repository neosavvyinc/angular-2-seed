import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'ns-navbar',
    styles: [require('./navbar.component.css')],
    template: require('./navbar.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {}
