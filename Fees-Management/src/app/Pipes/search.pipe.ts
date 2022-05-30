import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:{name:string, reg_no:string}[], searchstring:string): any {
    if(!value.length){
      return []
    }
      if (!searchstring){
        return value
      }
    let filteredData:{name:string, reg_no:string}[]=[]
    for(let student of value){
      if(student.name===searchstring || student.reg_no===searchstring){
        filteredData.push(student)
      }
    }
    return filteredData
  }}

