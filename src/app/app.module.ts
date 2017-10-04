import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
    { path: 'blog', component: BlogRollComponent },
    { path: 'about', component: AboutComponent },
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        BlogRollComponent,
        AboutComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AppShellModule.runtime(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }