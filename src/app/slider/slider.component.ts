import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  Input
} from "@angular/core";
import {coerceBooleanProperty} from '@angular/cdk/coercion';
declare var Swiper;

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})

export class SliderComponent implements OnInit {

  constructor() {}
  private Interval:any;
  @Input('delay') delayer:any =2500;
  @Input('repeat')
  get repater(){
    return this.repater;
  }
  set repater(name:boolean){
    let res = coerceBooleanProperty(name);
    if(res) this.loopit();
  }
  ImageUrls:any[] =[
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png'
  ]
  mySwiper: any;
  @ViewChild("next",{static:true}) nextBtn: any;
  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    let width;
    if (event) {
      width = event.target.innerWidth;
    } else {
      width = window.innerWidth;
    }
    let changed = false;
    if (width <= 768) {
      changed = Object.is(this.k, this.small);
      this.k = this.small;
    } else {
      changed = Object.is(this.k, this.large);
      this.k = this.large;
    }
    if (!changed) {
      this.mySwiper = new Swiper(".swiper-container", this.k);
    }
  }
  @HostListener('mouseenter') 
  onMouseEnter() {
   clearInterval(this.Interval);
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.loopit();
  }
  private small = {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  private large = {
    slidesPerView: 4,
    spaceBetween:30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  private k;
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.onResize();
    // this.slide.width = this.slides.toArray()[0].nativeElement.offsetWidth;
  }

  loopit() {
    this.Interval = setInterval(() => {
     this.nextBtn.nativeElement.click();
    }, this.delayer);
  }
}
