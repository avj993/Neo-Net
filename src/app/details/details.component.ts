import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { ActivatedRoute } from '@angular/router';
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
  ngOnInit() {
      if(!this.productData){
        this.service.get('../../assets/data/products.json').subscribe((data)=>{
          console.log(data);
          this.productData = data;
          this.getRouteparams();
        })
      } else{
        this.getRouteparams();
      }
  }
  getRouteparams(){
    this._route.params.subscribe(param => {
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
