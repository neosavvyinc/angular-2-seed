import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'ns-navbar',
    styles: [require('./navbar.component.scss')],
    template: require('./navbar.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

export default class NavbarComponent {}
