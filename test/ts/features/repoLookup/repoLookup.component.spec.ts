import {
    describe,
    expect,
    it,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import { provide } from '@angular/core';

import RepoLookupComponent from '../../../../src/ts/features/repoLookup/repoLookup.component';
import GithubService from '../../../../src/ts/features/repoLookup/services/githubService.service';
import { Store } from '@ngrx/store';

describe('RepoLookupComponent', () => {
    const testGitReturn: string = "test123";
    const testUserObject: Object = {
        user: "Bob",
        repos: [1,2,3]
    };

    class GithubServiceMock {
        getGitUser() {
            return testGitReturn;
        }
    }

    class StoreMock {
        select() {
            return {
                subscribe(cb: Function) {
                    cb(testUserObject);
                }
            }
        }
    }

    beforeEachProviders(() => [
        RepoLookupComponent,
        provide(GithubService, {useClass: GithubServiceMock}),
        provide(Store, {useClass: StoreMock})
    ]);

    it('should be able to call getUserAndRepos', inject([RepoLookupComponent], (repoLookupComponent: any) => {
        expect(repoLookupComponent.getUserAndRepos()).toEqual(testGitReturn);
    }));

    it('should see the gitUser returned from Store', inject([RepoLookupComponent], (repoLookupComponent: any) => {
        expect(repoLookupComponent.gitUser).toEqual(testUserObject);
    }));
});
