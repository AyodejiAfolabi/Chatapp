import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform( value:any, ...args: unknown[]): any {
    if(value){
      console.log(typeof(value))
      if(args[0]=='exac'){
        // return `${Date.parse(value).getHours()}:${Date.parse(value).getMinutes()}`
      }
// else if(args[0]=='full'){}
    }
    else{
    return null;
    }
  }

}
