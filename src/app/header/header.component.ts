import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fixeing = false;
  private sticky;
  open:Boolean = false;
  @ViewChild('fixer',{static:true}) headFixer;
  navigator=[{name:'home',active:true,path:'/home'},
  {name:'About Us',active:false,path:'/about'},
  {name:'Products',active:false,path:'/products'},
  {name:'Certification',active:false,path:'/certifications'},
  {name:'Contact Us',active:false,path:'/contactUs'}
];
  ngOnInit() {

  }
  OpenMenu(){
    this.open = !this.open;
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.navigator.forEach(element => {
            element.path == val.urlAfterRedirects ? element.active = true
            : element.active = false;
        });
      }
    });
  }
  NavigateTo(path){
    this.router.navigate([path]);
    this.open = false;
  }
}
