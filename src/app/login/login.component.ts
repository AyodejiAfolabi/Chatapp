import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public name;
public friend;
public arr=[]
  constructor(public behaviour:FirstService) { }

  ngOnInit(): void {
    if(localStorage.friends){
      this.arr=JSON.parse(localStorage.friends)
          }
  }
check(){
  let abc=this.name
  let a=0
  this.arr.forEach(
    function(each){
      if(each.name==abc){
a++
      }
    }
  )
  if(a>0){
  localStorage.holder=this.name
  this.behaviour.hold(this.name)
  }
  else{
    alert('Not Found')
  }
}

}
