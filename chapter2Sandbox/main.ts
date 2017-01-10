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
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Angular';
  }
}

// Module
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  bootstrap:    [ HelloWorldComponent ]
})
export class AppModule { }

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
