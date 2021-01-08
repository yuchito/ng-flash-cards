import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { FormsModule } from '@angular/forms';
import { AddFlashComponent } from './add-flash/add-flash.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashComponent,
    AddFlashComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
