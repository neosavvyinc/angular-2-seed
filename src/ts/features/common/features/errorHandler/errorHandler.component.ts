import { Component, AfterContentInit } from '@angular/core';
import { Toast, ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import 'angular2-toaster/src/toaster.css';

@Component({
    selector: 'ns-error-handler',
    directives: [ToasterContainerComponent],
    providers: [ToasterService],
    template: `<toaster-container [toasterconfig]="toasterconfig"></toaster-container>`
})

export default class ErrorHandlerComponent implements AfterContentInit {
    private toasterService: ToasterService;
    private subscription: any;

    public toasterconfig : ToasterConfig =
        new ToasterConfig({
            timeout: 5000,
            limit: 5,
        });

    constructor(toasterService: ToasterService, private store: Store<any>) {
        this.toasterService = toasterService;
    }

    ngAfterContentInit() {
        this.subscription = this.store
            .select('errorStack')
            .subscribe((errorStack: Error[]) => {
                const lastError: Error = _.last(errorStack);
                if (lastError) {
                    const toast: Toast = {
                        type: 'error',
                        title: 'Error!',
                        body: lastError.message,
                        showCloseButton: true,
                    };

                    this.toasterService.popAsync(toast);
                }
            })
    }
}