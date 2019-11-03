import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name:"split1"})
export class TransactionPipe implements PipeTransform
{
    str:string;
    str1:string[];
    transform(value:string) {
    this.str=value;
    this.str1=this.str.split(":");
    return this.str1[0];

    }

}