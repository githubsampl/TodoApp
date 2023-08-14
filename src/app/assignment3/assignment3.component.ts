import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  paragraph:boolean=true;
  arr:number[]=[];
  count:number=0;
 
  hide(){
    this.paragraph=!this.paragraph
    console.log('Button clicked!');
    // const timestamp = new Date().toLocaleString();
    // console.log('Button clicked at:', timestamp);
    this.arr.push(this.count);
    this.count+=1;
    // console.log(this.arr);
  }
  // getColor(){
  //  this.count > 4 ?'green':'yellow';
  // }

}
