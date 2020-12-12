import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatpipe'
})
export class ChatpipePipe implements PipeTransform {
  transform(value: any[],  filterText:any): unknown {
    if(!filterText){
      return value
    }
    else{
      // alert(7)
      let str=filterText.toLowerCase()
      let val=value.filter(p=> p.name.toLowerCase().includes(str) )
      // p.lastName.toLowerCase().includes(str) ||
      // p.middleName.toLowerCase().includes(str) ||
      // p.number.includes(str))
      return val
    }
    
  }


}
