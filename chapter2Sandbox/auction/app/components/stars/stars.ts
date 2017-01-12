// imports the interface OnItit where ngOnInit() is declared
import {Component,  Input, OnInit} from '@angular/core'; // <1>

@Component({
  templateUrl: 'app/components/stars/stars.html',
  styles: [` .starrating { color: #d17581; }`],
  selector: 'auction-stars'
})
export default class StarsComponent implements OnInit {
  // marks rating and count as inputs so that other components can assign values to them via data-binding expressions
  @Input() count: number = 5; // <1>
  @Input() rating: number = 0; // <2>
  // each element of the array represents a single star to be rendered
  stars: boolean[] = []; // <3>

// initializes stars based on the value provided by the parent component
  ngOnInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
