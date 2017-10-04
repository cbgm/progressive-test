import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Entry } from '../../entry';
import { environment } from '../../../environments/environment';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getAll(start, end): Observable<Entry[]> {
        return this.http.get(environment.apiEndpoint +'/backend/news/page?start=' + start + '&end=' + end + '').map((response: Response) => response.json())
    }
}