import { Component, OnInit,ViewChild,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSources=["../assets/images/2000px--Insert_image_here-.svg.png","../assets/images/logo.png","../assets/images/2000px--Insert_image_here-.svg.png"]
  Data = [{
    name:"Plastic Fencing Nets",
    imgurl:"assets/startup/pfn1.jpg"
  },{
    name:"Mosquito Screen",
    imgurl:"assets/startup/mosnet.jpg"
  },
  {
    name:"Expanded Metal",
    imgurl:"assets/startup/agro-shade-net.jpg"
  },{
    name:"Fiber Glass Plastering Mesh",
    imgurl:"assets/startup/fgp1.jpg"
  },{
    name:"Packaging Nets",
    imgurl:"assets/startup/packaging net 3.jpg"
  },{
    name:"Aluminium Grills",
    imgurl:"assets/startup/alum grill2.jpg"
  },{
    name:"Agro Shade Nets",
    imgurl:"assets/startup/pfn1.jpg"
  },{
    name:"Weather Strip",
    imgurl:"assets/startup/pfn1"
  }]
  ngOnInit(){
  }



}
