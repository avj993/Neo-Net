import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {AppService} from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { nearer } from 'q';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private service:AppService,private _route:ActivatedRoute) { }
  productData:any;
  product:any='';
  selectedProduct:any={};
  msg:any;
  @ViewChild('scroller',{static:true}) viewer;
  ngOnInit() {
      if(!this.productData){
        this.service.get('../../assets/data/products.json').subscribe((data)=>{
          this.productData = data;
          this.getRouteparams();
        })
      } else{
        this.getRouteparams();
      }
  }
  getRouteparams(){
    this._route.params.subscribe(param => {
      this.viewer.nativeElement.scrollIntoView({behavior: "smooth", block:"center" });
      this.product = param.product.split('-').join(' ');
      this.checkProcutPresent()
    })
  }
  checkProcutPresent(){
    if(this.productData[this.product]){
        this.selectedProduct = this.productData[this.product];
    } else{
      this.selectedProduct =undefined;
    }
  }

}
