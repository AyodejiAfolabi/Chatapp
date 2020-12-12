import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public holder
public rec
public myObj
public recArr
public ctn=false
  constructor(public serve:FirstService) { }

  ngOnInit(): void {
    this.serve.status.subscribe(
      data=>
      this.ctn=data
    )
    // let obj=JSON.parse(localStorage.friends)
    // obj.splice(3,2)
    // localStorage.friends=JSON.stringify(obj)
  
    this.serve.res.subscribe(
      data=>{this.recArr=data
      
      }
    )
    this.holder=localStorage.holder
    
    this.serve.reci.subscribe(data=>this.rec=data)
    this.myObj=JSON.parse(localStorage.senArr)
  }
closeNav(){
  document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";

}
openNav(){
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("mySidenav").style.height = "88%";
  document.getElementById("mySidenav").style.marginTop = "2%";
  // document.getElementById("mySidenav").style.marginLeft = "7%";
  document.getElementById("mySidenav").style.opacity = "0.8"
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";

}
showNav(){
  if(localStorage.recipient){
  document.getElementById("mySidenavs").style.width = "30%";
  document.getElementById("mySidenavs").style.height = "88%";
  document.getElementById("mySidenavs").style.marginTop = "2%";
  document.getElementById("mySidenavs").style.marginLeft = "70%";
  document.getElementById("mySidenavs").style.opacity = "0.8"
  document.getElementById("tt").style.opacity = "0.2"
  document.getElementById("mySidenavs").style.backgroundColor = "white"
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
}
}
closeNavs(){
  document.getElementById("mySidenavs").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("tt").style.opacity = ""

}
}
