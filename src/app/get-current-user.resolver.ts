import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class GetCurrentUserResolver implements Resolve<Observable<string>> {

    constructor(private svcApi: ApiService) { }
    resolve() {
        return this.svcApi.getCurrentUser();
    }
}
