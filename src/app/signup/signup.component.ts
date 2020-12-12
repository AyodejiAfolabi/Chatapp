import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public route:Router, public behaviour:FirstService) { }
  public name;
  public password;
public arr=[]
  ngOnInit(): void {
    if(!localStorage.messages){
      localStorage.messages=JSON.stringify([{text:'Say Hi to Your new friend',intro:true}])
    }
    if(localStorage.friends){
      this.arr=JSON.parse(localStorage.friends)
          }
  }

  present(){

    let abc=this.name
    let bc=this.password
    let a=0
    this.arr.forEach(
      function(each){
        if((each.name==abc||each.email==abc) &&each.password==bc){
  a++
  localStorage.senArr=JSON.stringify(each)
        }
      }
    )
    if(a>0){
    localStorage.holder=this.name
    this.behaviour.hold(this.name)
    this.route.navigate(['chat'])
    }
    else{
      this.route.navigate(['new/up'])
    }
  
  
//     let obj=JSON.parse(localStorage.friends)
// let person=obj.find(each=>each.name||each.email==this.name&&each.password==this.password)
// console.log(person)

// if(person){

  
//   localStorage.holder=person.name
//   this.behaviour.hold(this.name)
//   this.route.navigate(['chat'])
// }
//    else{
//     this.route.navigate(['new/up'])
//    }
  }

}
