import { Component, Input } from '@angular/core';

@Component({
    selector: 'repo-list',
    styles: [require('./repoList.component.scss')],
    template: require('./repoList.component.html')
})

export default class RepoListComponent {
    @Input() repos: Object[] = [];
}