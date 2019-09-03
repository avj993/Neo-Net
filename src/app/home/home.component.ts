import { Component, OnInit,ViewChild,HostListener } from '@angular/core';
import {ProImages} from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSources=["../assets/images/cover1.png","../assets/images/cover2.png","../assets/images/cover3.png","../assets/images/cover4.png"]
  Data = ProImages;
  ngOnInit(){
  }



}
