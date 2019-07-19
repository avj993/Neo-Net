export const productsLs=[
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
export const nav=[
  { name: "Home", active: true, path: "/home", isDropDown: false },
  { name: "About Us", active: false, path: "/about", isDropDown: false },
  { name: "Products", active: false, path: `/products/${productsLs[0].redirecTo}`, isDropDown: true },
  { name: "Contact Us", active: false, path: "/contactUs", isDropDown: false }
];

export const ProImages = [{
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
  imgurl:"assets/startup/"
}];