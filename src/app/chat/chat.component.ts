import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public p=[]
  public q=[]
public chat;
public filterText=''
public holder;
public intro=true;
public recipient;
public arr=[]
public arrs=[];
public status
public admin
public delt
  constructor(public behaviour:FirstService) { }

  ngOnInit(): void {
  
    localStorage.removeItem('recipient')
    
    this.behaviour.func(false)
    this.behaviour.status.subscribe(data=> this.status=data)
    this.behaviour.hol.subscribe(data=>{this.holder=data
    let obj=JSON.parse(localStorage.senArr)
    let grp=JSON.parse(localStorage.recArr)
    })
    // this.recipient=localStorage.recipient
    this.behaviour.reci.subscribe(data=>{this.recipient=data
      let obj=JSON.parse(localStorage.senArr).name
      let grp=JSON.parse(localStorage.recArr)
      if(grp.group){
       grp=JSON.parse(localStorage.recArr).admins
   let admin=grp.find(data=> data.name==obj)
   let delt;
   grp.forEach(
    function(data,i){
      if(data.name==obj){
        delt=i
      }
    }
   )
   this.delt=delt
   if(admin){
     this.admin=true
   }
    }
    })
    if(localStorage.messages){
this.arr=JSON.parse(localStorage.messages)
this.p=JSON.parse(localStorage.messages)
this.behaviour.messages.subscribe(data=>{this.arrs=data
  this.q=data
  
 
  data.forEach(
    function(each,i){
      if(i==1){
        if(each.id==localStorage.holder){
          each.check=true
      
        }
      }
      if(each.id==localStorage.holder){
        each.check=true
      
      }
      else{
        each.check=false
      
      }
    }
  )
  this.arrs=data
  
})
    }
 

  }
submit()

{
  if(this.chat){
  this.behaviour.tmessage.subscribe(data=>
    this.arr=data
  )
  let min= String(new Date().getMinutes())
  if(Number(min)<10){
    min='0'+String(min)
  }
  let obj={id:localStorage.holder,text:this.chat,time:new Date(),to:localStorage.recipient,exac:`${new Date().getHours()}:${min} `,seen:false,all:false,del:false}
  
  let ar=JSON.parse(localStorage.recArr)
if(ar.group){
  obj.all=true
 }
 else{

   obj.all=false
 }
this.arr.push(obj)
// console.log(this.arr)

  localStorage.messages=JSON.stringify(this.arr)
this.behaviour.tmess(JSON.parse(localStorage.messages))

  let myArr=JSON.parse(localStorage.messages)
let arrs=[]


if((JSON.parse(localStorage.recArr).group==true)){
  myArr.forEach(
    function(each){
     
    if( (each.to==localStorage.recipient) )
    {
      arrs.push(each)
    
     }
    }
    )
}


else{
myArr.forEach(
function(each){
if( (each.id==localStorage.holder&&each.to==localStorage.recipient) || (each.id==localStorage.recipient&&each.to==localStorage.holder)  )
{
arrs.push(each)
// console.log(arrs)
 }
}
)



}

console.log(JSON.parse(localStorage.messages))
this.arrs=arrs
this.behaviour.mes(this.arrs)


this.chat=''
}
}
del(j){
  
  let b=JSON.parse(localStorage.messages)
  let c=this.q

  
  
  let index;
  b.forEach(
    function(each,i){
   let aa= JSON.stringify(each)
   let ac=JSON.stringify(aa).lastIndexOf('exac')
  

   let ak=aa.slice(0,ac-18)

        let n =JSON.stringify(c[j]).lastIndexOf('exac')
    let dd=JSON.stringify(c[j]).slice(0,n)
    console.log(dd)
   if(ak==dd){
     let a=JSON.parse(localStorage.messages)

    //  a.splice(i,1)
    // a[i].text= `This Message has been deleted`
    a[i].del=true;
     index=i
    localStorage.messages=JSON.stringify(a)
    
    
   }  
    }
  )
  
  // this.arrs[j].text= `This Message has been deleted`
  this.arrs[j].del=true
  // this.arr.splice(index,1)
  this.behaviour.mes(this.arrs)
  this.behaviour.tmess(JSON.parse(localStorage.messages))
  
}













deli(j){
  
  let b=JSON.parse(localStorage.messages)
  let c=this.q

  let delt=this.delt
  
  let index;
  b.forEach(
    function(each,i){
   let aa= JSON.stringify(each)
   let ac=JSON.stringify(aa).lastIndexOf('exac')
  

   let ak=aa.slice(0,ac-18)

        let n =JSON.stringify(c[j]).lastIndexOf('exac')
    let dd=JSON.stringify(c[j]).slice(0,n)
    console.log(dd)
   if(ak==dd){
     let a=JSON.parse(localStorage.messages)
    //  a[i].text= `This Message has been deleted by the Admin ${delt+1}`
     a[i].admindel=true;
     index=i
    
     localStorage.messages=JSON.stringify(a)
    
    
   }

    }
  )
  // this.arrs[j].text=`This Message has been deleted by the Admin ${this.delt+1}`
  // this.arrs[j].admindel=true;
  this.arrs[j].admindel=true
  // this.arr[index].text='This Message has been deleted by the Admin'
  // this.arr[index].admindel=true;
  this.behaviour.mes(this.arrs)
  // alert(1)
  this.behaviour.tmess(JSON.parse(localStorage.messages))
  
  // this.arrs[i].text='This Message has been deleted by the Admin'
  // this.arrs[i].admindel=true;
  // this.arr[i].text='This Message has been deleted by the Admin'
  // this.arr[i].admindel=true;
  // this.behaviour.mes(this.arrs)
  // this.behaviour.tmess(this.arr)
  
}








}





