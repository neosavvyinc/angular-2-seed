import { Component } from '@angular/core';

import '../css/styles.css';

import { WelcomeComponent } from './common/welcome/welcome.component';

@Component({
    selector: 'app',
    directives: [WelcomeComponent],
    template:
        `<main>
            <welcome></welcome>
        </main>`
})

export class AppComponent {}
