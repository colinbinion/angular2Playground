import {Component, ViewEncapsulation} from '@angular/core';
// imports the classes that implement the product service.  these will serve data
import {Product, ProductService} from '../../services/product-service';

// the HTML template will be located in the application.html file

  // turns the ApplicationComponent class into an Angular component by annotating it with the @Component decorator
@Component({
  // selector defines the name of the custom HTML tag used in index.html
  selector: 'auction-application', // <1>
  templateUrl: 'app/components/application/application.html', // <3>
  // CSS is located in the application.css file
  styleUrls: ['app/components/application/application.css'], // <4>
  encapsulation:ViewEncapsulation.None
})

  // exports the ApplicationComponent bc it is used in another class: AppModule
export default class ApplicationComponent {
  // uses generics to ensure the products array contains only objects of type Product
  products: Array<Product> = []; // <1>

  // in TS angular may be asked to inject required objects (such as ProductService) via constructor arguments
  constructor(private productService: ProductService) { // <2>
    // gets a list of products and assigns them to the products property. all of a component's properties become available in the view template via databinding
    this.products = this.productService.getProducts(); // <3>
  }
}
