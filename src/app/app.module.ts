import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseButtonComponent } from './base/base-button/base-button.component';
import { NumberComponent } from './numbers/number/number.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, BaseButtonComponent, NumberComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
