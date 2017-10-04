import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';

import { AppComponent } from './app.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogRollComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AppShellModule.runtime()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }