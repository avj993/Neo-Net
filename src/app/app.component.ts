import { Component,ViewChild,HostListener } from '@angular/core';
import {animater} from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animater]
})
export class AppComponent {
  @ViewChild('header',{static:true}) head;
  @ViewChild('body',{static:true}) body;
  private sticky;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if ((window.pageYOffset >= this.sticky) && (this.head.fixeing == false)) {
      this.head.fixeing = true;
      this.body.nativeElement.style.marginTop = this.head.headFixer.nativeElement.offsetHeight+'px';
    } else 
    if ((this.sticky > window.pageYOffset) && (this.head.fixeing == true)){
      this.head.fixeing = false;
      this.body.nativeElement.style.marginTop = 0;
    }
  }
  constructor(){

  }
  ngAfterViewInit(): void {
    this.sticky = this.head.headFixer.nativeElement.offsetTop;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


}
