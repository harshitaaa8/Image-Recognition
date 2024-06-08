import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageClassfierUploadComponent } from './image-classifier-upload/image-classifier-upload.component';
import { ImageClassifierWebcamComponent } from './image-classifier-webcam/image-classifier-webcam.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageClassfierUploadComponent,
    ImageClassifierWebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []

})
export class AppModule { }
