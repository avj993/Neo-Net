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
  @ViewChild('o',{static:true}) body;
  private sticky;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if ((window.pageYOffset >= this.sticky) && (this.head.fixeing == false)) {
      console.log(this.head.headFixer.nativeElement.height);
      this.head.fixeing = true;
      this.body.nativeElement.style.marginTop = this.head.headFixer.nativeElement.offsetHeight+'px';
    } else 
    if ((this.sticky > window.pageYOffset) && (this.head.fixeing == true)){
      this.head.fixeing = false;
      this.body.nativeElement.style.marginTop = 0;
    }
  }
  ngAfterViewInit(): void {
    this.sticky = this.head.headFixer.nativeElement.offsetTop;
  }


}
