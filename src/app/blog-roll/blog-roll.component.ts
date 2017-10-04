import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog/blog.service';
import { Entry } from '../entry';
import {OnlineService} from "../shared/online/online.service"; 

@Component({
    selector: 'blog-roll',
    templateUrl: './blog-roll.component.html',
    styleUrls: ['./blog-roll.component.css'],
    providers: [BlogService, OnlineService]
})
export class BlogRollComponent implements OnInit {
    entries: Array<Entry>;
    start: number;
    end: number;
    emptyEntries: boolean;

    constructor(private blogService: BlogService, private onlineService: OnlineService) { this.entries = []; this.start = 0; this.end = 5; this.emptyEntries = false; }

    ngOnInit() {
        this.getEntries();
    }

    loadMore() {

        if (this.onlineService.online) {
            this.start = this.start + 5;
            this.end = this.end + 5;

            if (!this.emptyEntries)
                this.getEntries();
        }

    }

    getEntries() {
        this.blogService.getAll(this.start, this.end).subscribe(
            data => {
                if (data.length < 5)
                    this.emptyEntries = true;

                this.entries = this.entries.concat(data);
            },
            error => {
                this.start = this.start - 5;
                this.end = this.end - 5;
                console.log(error)
            }
        )
    }
}