import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutyouComponent} from './aboutyou/aboutyou.component';
import {DetailsComponent} from './details/details.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutyouComponent
  },
  {
    path:'products/:product',
    component:DetailsComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
