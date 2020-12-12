import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): any {
    if(value){
if(value.length>10){
  let a=value.slice(0,7)
  a=a+'......'
  return a
}
else{
  return value
}

    }
  }

}
