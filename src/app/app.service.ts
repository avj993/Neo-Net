import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  productData :any;
  constructor(private http:HttpClient) { }

  get(url){
   return this.http.get(url);
  }
 
}
