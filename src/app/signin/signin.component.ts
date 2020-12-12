import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public fb:FormBuilder, public route:Router) { }
public group=false;
public uname=false
public uemail=false;
public disp=false
  public word='';
  public complete=false;
  public img=''
  public match;
  public check=''
  public arr=[]
  public admin
  

  public userForm=this.fb.group(
    {
  fullName:['',[this.validateName]],
  name:['',[this.validatename]],
  password:['',[this.validatepass]],
  conPassword:['',
  this.validatePassword
  ],
  img:[''],
  desc:[''],
  admin2:[''],
  email:['',[this.validateEmail]]
  })
  validateName(control:AbstractControl){
    if(control.value)
    {
      let b=control.value[0]
      let re=/^[A-Z]$/
      
      console.log(re.test(b))
        if(!re.test(b)){
          return {"begin":true}
        } 

      re=/[0-9]/
      if(re.test(control.value)){
        
  return{
    characters:true
  }
  
      }
      return null;
      
      }
   
  }
  dd(){
    if(!this.group){
    this.group=true
    }
    else{
      this.group=false
    }
  }
  pic(){
    this.disp=true
    this.img=this.userForm.value.img
    let n=this.img.lastIndexOf('\\')
this.img=this.img.slice(n+1,this.img.length)
console.log(this.img)
// console.log(n);
let img=`assets/pics/${this.img}`
this.img=img
  }
  validatename(control:AbstractControl){
  if(control.value){
    if(control.value.length<8){
      return {length:true}
    }
  }
  }
  validatepass(control:AbstractControl){
    // let check
if(control.value){
 

}
// check=this.check
  }
  validatePassword(control:AbstractControl){
if(control.value){

}
  }
  validateEmail(control:AbstractControl){
    if(control.value){
      let reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
    if(!reg.test(control.value)){
      
      return {characters:true}
    }
    return null
    }
  }
 
  ngOnInit(): void {
    if(!localStorage.messages){
    localStorage.messages=JSON.stringify([{}])
    }
    if(localStorage.friends){
      this.arr=JSON.parse(localStorage.friends)
    }
    else{
      this.arr=[]
    }
    this.userForm.get('name').invalid
  }
  real(){
    this.word=this.userForm.get('password').value
  }
con(){
this.check=this.userForm.get('conPassword').value
if(this.word!==this.check){
  this.match=true
}
else{
  this.match=false
  this.userForm.invalid
}
}
sub(){
  if(this.userForm.valid && this.userForm.get('name').dirty==true&& this.userForm.get('fullName').dirty==true
  && this.userForm.get('password').dirty==true && this.userForm.get('conPassword').dirty==true && this.userForm.get('email').dirty==true
  && this.word==this.check
  ){
    let obj=this.userForm.value
    obj.group=this.group
    if(this.group){
      obj.admins=[this.admin1(),this.admin2()]
    }
    obj.img=this.img
    obj.time=new Date()
    obj.created=`${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()} at ${new Date().getHours()}:
    ${new Date().getMinutes()}
    `
    console.log(obj)
    let a=0
    this.arr.forEach(
      each=>{
        if(each.name==obj.name){
a++
this.uname=true
        }
if(each.email==obj.email){
          a++
          this.uemail=true
}
                
      }
    )
if(a==0){
    this.arr.push(obj)
    localStorage.friends=JSON.stringify(this.arr)
    this.complete=false
    this.route.navigate(['new/in'])
  }
  
  }
  else{
    this.complete=true
  }
 
}

admin1(){
  let index=document.getElementById('admin1').value
  return  this.arr[index]


}
admin2(){
  let index=document.getElementById('admin2').value
  return this.arr[index]
}
}
