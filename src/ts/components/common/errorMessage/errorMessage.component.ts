import { Component, Input } from '@angular/core';

@Component({
    selector: 'error-message',
    styles: [require('./errorMessage.component.scss')],
    template: require('./errorMessage.component.html')
})

export default class ErrorMessageComponent {
    @Input() error: any;
}