import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PropertyBindingComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
