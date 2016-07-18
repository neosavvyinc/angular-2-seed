import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Store } from '@ngrx/store';
import { SET_GITUSER } from '../repoLookup.substore';

// this import is for the commented-out dummy post method, below
// import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export default class GithubService {
    constructor (private http: Http, private store: Store<any>) {}

    private gitUrl: string = 'https://api.github.com/users';
    private reqParams: string = '?access_token=2cf502059c5d916f26b8dcaac66b924062d9a5b9';

    getGitUser (name: string): any {
        return Observable
            .combineLatest(this.getUser(name), this.getRepos(name))
            .subscribe(
                data => {
                    let gitUser: Object = {
                        user: data[0],
                        repos: data[1]
                    };

                    this.store.dispatch({ type: SET_GITUSER, payload: gitUser})
                },
                error => {
                    const errMsg = error.message ? error.message
                        : error.status ? `${error.status} - ${error.statusText}`
                        : 'Server error';
                    this.store.dispatch({type: 'CREATE_ERROR', payload: new Error(errMsg)})
                }
            )
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message
            : error.status ? `${error.status} - ${error.statusText}`
            : 'Server error';
        this.store.dispatch({type: 'CREATE_ERROR', payload: errMsg});
    }

    private getUser (name: string): Observable<Object> {
        return this.http.get(`${this.gitUrl}/${name}${this.reqParams}`)
            .map(this.extractUserData)
    }

    private extractUserData (res: Response): any {
        return _.pick(res.json(), ['avatar_url', 'login', 'name', 'public_repos', 'html_url']);
    }

    private getRepos (name: string): Observable<Object> {
        return this.http.get(`${this.gitUrl}/${name}/repos${this.reqParams}`)
            .map(this.extractReposData)
    }

    private extractReposData(res: Response): any {
        return res.json().map((repo: Object) => _.pick(repo, ['name', 'html_url']));
    }

    // dummy post method; git's api doesn't allow for posting like this, but here's how we might do it:
    // addUser (name: string): Observable<Object> {
    //     let body = JSON.stringify({ name });
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //
    //     return this.http.post(this.heroesUrl, body, options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
}