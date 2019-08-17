import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first-component',
  template:`<h2>hi india</h2>
  <p>child data:{{parentdata}}</p>
  <input #childtext (keyup)="onChange(childtext.value)"  />`
  ,
  styleUrls: ['./first-component.component.css'],
  inputs:['parentdata'],
  outputs:['childEvent']
  
  
})
export class FirstComponentComponent{
  parentdata: string;
  childEvent= new EventEmitter<string>();
  onChange(value:string)
  {
    this.childEvent.emit(value);
  }




  

 

}
