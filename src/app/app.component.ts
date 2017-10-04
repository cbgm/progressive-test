import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Creative_';
    isConnected: Observable<boolean>;

    constructor() {
        this.isConnected = Observable.merge(
            Observable.of(navigator.onLine),
            Observable.fromEvent(window, 'online').map(() => true),
            Observable.fromEvent(window, 'offline').map(() => false));
    }
}