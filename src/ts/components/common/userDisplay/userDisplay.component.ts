import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-display',
    styles: [require('./userDisplay.component.scss')],
    template: require('./userDisplay.component.html')
})

export default class RepoListComponent {
    @Input() user: Object;
}