import { Component } from '@angular/core';

import RepoListComponent from '../common/repoList/repoList.component';
import UserDisplayComponent from '../common/userDisplay/userDisplay.component';
import ErrorMessageComponent from '../common/errorMessage/errorMessage.component';
import GithubService from '../../services/githubService.service';

@Component({
    selector: 'repo-lookup',
    styles: [require('./repoLookup.component.scss')],
    template: require('./repoLookup.component.html'),
    directives: [RepoListComponent, UserDisplayComponent, ErrorMessageComponent],
    providers: [GithubService]
})

export default class SampleFormComponent {
    user: Object;
    repos: Object;
    error: string;

    constructor (private githubService: GithubService) {};

    getUserAndRepos = (name: string) => {
        this.user = null;
        this.repos = null;

        this.githubService.getUserAndRepos(name)
            .subscribe(
                data => {
                    this.error = null;
                    this.user = data[0];
                    this.repos = data[1];
                },
                error => this.error = <any>error
            );
    };
}
