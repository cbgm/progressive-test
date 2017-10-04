import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {OnlineService} from "./shared/online/online.service"; 


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [OnlineService]
})
export class AppComponent {
    title = 'Creative_';
    isConnected: Observable<boolean>;

    constructor(private onlineService: OnlineService) {
       this.isConnected = this.onlineService.online;
    }
}