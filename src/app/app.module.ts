import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // used in section 1

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // adding custom component // section 2
  ],
  imports: [
    BrowserModule,  // extra modules to use within the app
    // FormsModule // used in section 1
  ],
  providers: [],
  bootstrap: [AppComponent] // this gets loaded on initial load
})
export class AppModule { }
