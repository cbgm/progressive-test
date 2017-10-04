import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Entry } from '../../entry';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getAll(start, end): Observable<Entry[]> {
        return this.http.get('http://jbossews-creativesp.rhcloud.com/backend/news/page?start=' + start + '&end=' + end + '').map((response: Response) => response.json())
    }
}