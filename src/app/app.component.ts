import { Component } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  template: `<h1 class="headertext"> {{title}} Hello World </h1>
             <h2 [class.headertext]="applyclass" >hfg</h2>
             <img [src]="imgurl" />
             <p [style.color]="applystyle ? 'yellow' : 'blue'"> Independence Day</p>
             <button (click)="onclick(inputvalue.id)"></button>
             <input type=text #inputvalue  name="gomathi " id="24342">
              <input type="text" [(ngModel)]="firstName" >
             <input type="text" [(ngModel)]="secondName">
             <p >Full Name : {{firstName}} {{secondName}} </p>
             <p *ngIf="showelement">MUTHU</p>
             <div [ngSwitch]="colors">
             <p *ngSwitchCase="6">Item1</p>
             <p *ngSwitchCase="5">Item2</p>
             <p *ngSwitchDefault>invalid</p>
             </div>

             <ul>
             <li *ngFor="let color of colors1">{{color}}</li>
             </ul>


             <h1>ParentData</h1>
             <label>Enter the Parent Data</label>
             <input type=text #valuepass (keyup)="0" >
 <p>childValue {{childdata}}</p>
             <app-first-component (childEvent)="childdata=$event" [parentdata]="valuepass.value"></app-first-component>
             
      `,      
            
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'welcome ';
  imgurl="https://lorempixel.com/300/200"
  colors="5";
  applyclass=true;
  applystyle=false;
  showelement=false;
  firstName;
  secondName;
  colors1=["blue","black"]
  childdata:string;

  onclick(id){

    alert(id);
  }
  
}
