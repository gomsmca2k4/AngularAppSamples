import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<p>{{title}}</p>
             <img [src]="link" />
             <p [class.titletext]="applyclass">APPLY CLASS</p>
             <p [style.color]="applystyle ? 'yellow' : 'lightgreen'">APPLY style</p>`,
  styles:[`titletext{ color:cyan;

  }
    `],
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title="Hello India"
  link='https://lorempixel.com/50/50'
  applyclass=true;
  applystyle=true;

  ngOnInit() {
  }

}
