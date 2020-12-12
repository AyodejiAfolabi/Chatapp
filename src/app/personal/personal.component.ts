import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
public arr=[];
public filterText=''
public arrs=[];
  constructor(public behaviour:FirstService, public route:Router) { }

  ngOnInit(): void {
    
    
    if(localStorage.friends){ 
      let myArr=JSON.parse(localStorage.friends)

      this.arr=myArr.filter(
        each=> 
         each.name!==localStorage.holder
      
      )
          }
          let mess;
          this.behaviour.tmessage.subscribe(data=> {mess=data
            this.arr.forEach(
              function(each){
              
                mess.forEach(
                  function(fors){
                    if(each.group){
                      if(fors.to==each.name){
                    
                        each.last=fors.text
                        each.show=fors.admindel
                        // console.log(each)
                        if(fors.id==localStorage.holder){
                          each.mine=true
                        
                        }
                   
                        else{
                         each.mine=false
                  
                       
                        }
                       
                      }
                    }
  if((fors.id==localStorage.holder&&fors.to==each.name) ||
   (fors.id==each.name&&fors.to==localStorage.holder) ){
     each.last=fors.text
     each.show=fors.del
     console.log(each)
     if(fors.id==localStorage.holder){
       each.mine=true
     }

     else{
      each.mine=false
    
     }
    
 }
 }
 )  
}
)
 }
 )
        
         
  }

chat(i){
  
  localStorage.recipient=this.arr[i].name
this.behaviour.rec(this.arr[i].name)

  this.behaviour.func(true)
  localStorage.recArr=JSON.stringify(this.arr[i])
this.behaviour.re(this.arr[i])
  let myArr=JSON.parse(localStorage.messages)
  
let arrs=[]
if((JSON.parse(localStorage.recArr).group==true)){
  myArr.forEach(
    function(each){
     
    if( (each.to==localStorage.recipient) )
    {
    arrs.push(each)  
    arrs.map(
      each=> {
        if(each.id!==localStorage.holder){
          each.seen=true
        // console.log(each)
          }
                                                                                                               }
    )
     }
    }
    )
}
else{
myArr.forEach(
function(each){
 
if( (each.id==localStorage.holder&&each.to==localStorage.recipient) ||
 (each.id==localStorage.recipient&&each.to==localStorage.holder))
{
arrs.push(each)

arrs.map(
  each=> {
    if(each.to==localStorage.holder){
      each.seen=true
      console.log(each)
      
      }
  }
)
 }
}
)

}
localStorage.messages=JSON.stringify(myArr)

console.log(JSON.parse(localStorage.messages))
this.behaviour.tmess(myArr)
this.arrs=arrs

if(arrs.length==0&& (JSON.parse(localStorage.recArr).group==false)){
  arrs.push({text:'Say Hi to Your new friend',intro:true})
}
else if(arrs.length==0&&JSON.parse(localStorage.recArr).group){
  arrs.push({text:'You were added to the group',intro:true})
}
this.behaviour.mes(this.arrs)
}



logout(){

  localStorage.removeItem('holder')
  this.route.navigate(['new'])
}
}
