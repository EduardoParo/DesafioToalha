import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PoFieldModule, PoModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';
import { appServices } from './app.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PoModule,
    PoFieldModule,
    RouterModule.forRoot([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [(
       appServices
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
