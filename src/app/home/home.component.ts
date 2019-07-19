import { Component, OnInit,ViewChild,HostListener } from '@angular/core';
import {ProImages} from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSources=["../assets/images/2000px--Insert_image_here-.svg.png","../assets/images/logo.png","../assets/images/2000px--Insert_image_here-.svg.png"]
  Data = ProImages;
  ngOnInit(){
  }



}
