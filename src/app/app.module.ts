import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyTabsModule } from 'ngx-formly-tabs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    FormlyTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
