// imports the bootstrap method and the @Component annotation from the corresponding Angular packages, making available for apps code
import {Component} from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Component
@Component({
  // @Component annotation placed above the HelloWorldComponent class makes it an angular component
  selector: 'hello-world',
  // template property defines the HTML markup for rendering this component
  template: '<h1>Hello {{ name }}!</h1>'
})
// annotated HelloWorldComponent class represents the component
class HelloWorldComponent {
  // name property is used in the data-binding expression on the components template
  name: string;

// inside constructor initialize the name property of the value angular2 bound to the template
  constructor() {
    this.name = 'Angular';
  }
}

// Module
// declares content of module
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  bootstrap:    [ HelloWorldComponent ]
})
// declares class representing module
export class AppModule { }

// App bootstrap
// loads module
platformBrowserDynamic().bootstrapModule(AppModule);
