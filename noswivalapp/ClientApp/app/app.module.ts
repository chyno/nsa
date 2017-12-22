import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core';

import { HomeModule } from './home/home.module';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { NpmsComponent } from './npms/npms.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, NpmsComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routing,
        CoreModule.forRoot(),
        HomeModule,
    ],
    providers: [
        AppService
    ],
    exports: [
    ]
})
export class AppModule { }
