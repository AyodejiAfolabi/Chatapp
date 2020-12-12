import { Pipe, PipeTransform } from '@angular/core';
import { FirstService } from '../services/first.service';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {
constructor(public behaviour:FirstService){

}
  transform(value: any, filterText: String): any {
    if(value){
      // alert(filterText)
      let mess;
this.behaviour.tmessage.subscribe(data=>  mess=data)
console.log(mess)
let arr=mess.filter(each=> (each.id==localStorage.holder&&each.to==filterText) || (each.id==filterText&&each.to==localStorage.holder) )
console.log(arr)
console.log(arr[arr.length-1])
let c=arr[arr.length-1]
return c.text

    }
  }

}
