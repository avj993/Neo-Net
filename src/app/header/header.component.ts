import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  fixeing = false;
  private sticky;
  open: Boolean = false;
  openSub: Boolean = false;
  @ViewChild("fixer", { static: true }) headFixer;
  productsList = [
    {
      name: "Plastic Fencing Nets",
      redirecTo: "Plastic-Fencing-Nets"
    },
    {
      name: "Mosquito Screen",
      redirecTo: "Mosquito-Screen"
    },
    {
      name: "Expanded Metal",
      redirecTo: "Expanded-Metal"
    },
    {
      name: "Narrow woven fabrics(VELCRO)",
      redirecTo: "Narrow-woven-fabrics(VELCRO)"
    },
    {
      name: "Agro Shade Nets",
      redirecTo: "Agro-Shade-Nets"
    },
    {
      name: "Fiber Glass Plastering Mesh",
      redirecTo: "Fiber-Glass-Plastering-Mesh"
    },
    {
      name: "Packaging Nets",
      redirecTo: "Packaging-Nets"
    },
    {
      name: "Aluminium Grills",
      redirecTo: "Aluminium-Grills"
    },
    {
      name: "Weather Strips",
      redirecTo: "Weather-Strips"
    }
  ];
  navigator = [
    { name: "Home", active: true, path: "/home", isDropDown: false },
    { name: "About Us", active: false, path: "/about", isDropDown: false },
    { name: "Products", active: false, path: `/products/${this.productsList[0].redirecTo}`, isDropDown: true },
    {
      name: "Certification",
      active: false,
      path: "/certifications",
      isDropDown: false
    },
    { name: "Contact Us", active: false, path: "/contactUs", isDropDown: false }
  ];

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
    this.router.navigate([path]);
    this.open = false;
  }
  OpenDropdoen() {
    this.openSub = !this.openSub;
  }
}
