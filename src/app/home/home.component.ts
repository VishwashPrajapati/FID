import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishserviceService } from '../services/dishservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
featureddish : Dish;
  constructor(private dishservice:DishserviceService) { } 

  ngOnInit(): void {
    
    // this.dish = DISHES.filter((dish)=>dish)[0]
    
    this.dishservice.getFeaturedDish().then((featureddish)=>this.featureddish = featureddish)

    // setInterval(()=>{this.featureddish = DISHES.filter((dish)=>dish.featured)[0]},2000);
    
  }

}
