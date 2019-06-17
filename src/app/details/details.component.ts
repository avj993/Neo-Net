import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private service:AppService) { }
  productData:any;
  ngOnInit() {
      if(!this.productData){
        this.service.get('../../assets/data/products.json').subscribe((data)=>{
          console.log(data);
        })
      }
  }

}
