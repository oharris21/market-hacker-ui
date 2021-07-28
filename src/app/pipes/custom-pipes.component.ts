import { Pipe, PipeTransform } from '@angular/core';
import { StockDetailed } from '../models/StockDetailed';

@Pipe({name: 'fiveMinuteDipPercentagePipe'})
export class CustomPipe implements PipeTransform {
    // The pipe's transform method take first Argurment is the data using that 
    // pipe( which is data before the '|' mark in the template), the others 
    // parameter is optional
  
    // Your sort logic is in here
    transform(input: Array<StockDetailed>, para1, para2) {
      return input.sort( (a,b) => b.fiveMinuteDipPercentage - a.fiveMinuteDipPercentage);
    }
  }