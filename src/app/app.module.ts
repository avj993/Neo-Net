import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {SliderComponent} from'./slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutyouComponent } from './aboutyou/aboutyou.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    AboutyouComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
