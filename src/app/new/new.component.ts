import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(public fb:FormBuilder , public route:Router) { }
//   public name;
//   public password;
//   public word='';
//   public signUp=true;
//   public signIn=false
//   public complete=false;
//   public match;
//   public check=''
//   public arr=[]
//   public userForm=this.fb.group(
//     {
//   fullName:['',[this.validateName]],
//   name:['',[this.validatename]],
//   password:['',[this.validatepass]],
//   conPassword:['',
//   this.validatePassword
//   ],
//   email:['',[this.validateEmail]]
//   })
//   validateName(control:AbstractControl){
//     if(control.value)
//     {
//       let b=control.value[0]
//       let re=/^[A-Z]$/
      
//       console.log(re.test(b))
//         if(!re.test(b)){
//           return {"begin":true}
//         } 

//       re=/[0-9]/
//       if(!re.test(control.value)){
        
//   return{
//     characters:true
//   }
  
//       }
//       return null;
      
//       }
   
//   }
//   validatename(control:AbstractControl){
//   if(control.value){
//     if(control.value.length<8){
//       return {length:true}
//     }
//   }
//   }
//   validatepass(control:AbstractControl){
//     // let check
// if(control.value){
 

// }
// // check=this.check
//   }
//   validatePassword(control:AbstractControl){
// if(control.value){

// }
//   }
//   validateEmail(control:AbstractControl){
//     if(control.value){
//       let reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
//     if(!reg.test(control.value)){
      
//       return {characters:true}
//     }
//     return null
//     }
//   }
 
  ngOnInit(): void {

  }
//   real(){
//     this.word=this.userForm.get('password').value
//   }
// con(){
// this.check=this.userForm.get('conPassword').value
// if(this.word!==this.check){
//   this.match=true
//   // console.log(99)
// }
// else{
//   this.match=false
// }
// }
// sub(){
//   if(this.userForm.valid && this.userForm.get('name').dirty==true&& this.userForm.get('fullName').dirty==true
//   && this.userForm.get('password').dirty==true&& this.userForm.get('email').dirty==true
  
//   ){
//     let obj=this.userForm.value
//     obj.time=new Date()
//     console.log(obj)
//     this.arr.push(obj)
//     localStorage.friends=JSON.stringify(this.arr)
//     this.complete=false
//     this.route.navigate(['login'])
//   }
//   else{
//     // alert('NO')
//     this.complete=true
//   }
// }
// signin(){
// this.signUp=false
// // alert(99)
// this.signIn=true
// }
// signup(){
//   this.signUp=true
//   // alert(99)
//   this.signIn=false
//   }
//   present(){
//     let obj=JSON.parse(localStorage.friends)
// let person=obj.find(each=>each.name==this.name&&each.password==this.password)
// console.log(person)

// if(person){
//   localStorage.holder=person.name
//   this.route.navigate(['home'])
// }
//    else{
//     this.signUp=true
//     this.signIn=false
//    }
//   }
}

