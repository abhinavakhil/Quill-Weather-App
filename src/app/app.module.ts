import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { SenconPipe } from './sencon.pipe';
import { SunsetPipe } from './sunset.pipe';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    SenconPipe,
    SunsetPipe,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
