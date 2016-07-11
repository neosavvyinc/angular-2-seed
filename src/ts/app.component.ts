import { Component } from '@angular/core';
import '../css/styles.css';

import { WelcomeComponent } from './common/welcome/welcome.component';

@Component({
    selector: 'app',
    styleUrls: ['./app.component.css'],
    directives: [WelcomeComponent],
    template: `<main>
        <welcome></welcome>
    </main>`
})
export class AppComponent {}
