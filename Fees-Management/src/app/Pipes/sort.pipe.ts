import { Pipe, PipeTransform } from '@angular/core';
import { studentInterface } from 'Interface/student';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
 students?:studentInterface[]=[]
  transform(students: {
    reg_no:string,
    name:string,
    }[]): any[] {
    students.sort((a:any,b:any)=>{
      if( a.name<b.name){
        return -1;
      }else  if( a.name<b.name){
        return 1;
      }else {
        return 0
      }
    })
    return students;
  }

}
