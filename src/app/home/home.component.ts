import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
featureddish : Dish;
  constructor() { } 

  ngOnInit(): void {
    
    // this.dish = DISHES.filter((dish)=>dish)[0]

    this.featureddish = DISHES.filter((dish)=>dish.featured)[0];
    
  }

}
