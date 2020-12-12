import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
public status= new BehaviorSubject(false)
public func(item){
  this.status.next(item)
}
public messages= new BehaviorSubject([])
public mes(item){
  this.messages.next(item)
}
public reci= new BehaviorSubject('')
public rec(item){
  this.reci.next(item)
}
public hol= new BehaviorSubject('')
public hold(item){
  this.hol.next(item)
}
// public amessages= new BehaviorSubject(JSON.parse(localStorage.messages))
// public ames(item){
//   this.messages.next(item)
// }
public tmessage=new BehaviorSubject(JSON.parse(localStorage.messages) || [])
public tmess(item){
 
this.tmessage.next(item)
}
public res= new BehaviorSubject({})
public re(item){
  
  this.res.next(item)
}
  constructor() { 
  }
}
