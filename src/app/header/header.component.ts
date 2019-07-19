import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {productsLs,nav} from '../constants';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  fixeing = false;
  open: Boolean = false;
  openSub: Boolean = false;
  @ViewChild("fixer", { static: true }) headFixer;
  productsList =productsLs;
  navigator = nav;
  ngOnInit() {}
  OpenMenu() {
    this.open = !this.open;
  }
  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.navigator.forEach(element => {
          val.urlAfterRedirects.indexOf(element.path) != -1
            ? (element.active = true)
            : (element.active = false);
        });
      }
    });
  }
  NavigateTo(path) {
    this.open = false;
    this.router.navigate([path]);
  }
  OpenDropdoen(evt) {
    this.openSub = !this.openSub;
    evt.stopPropagation();
  }
}
