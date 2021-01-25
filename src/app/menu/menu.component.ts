import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishserviceService } from '../services/dishservice.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishservice: DishserviceService) { }
  dish: Dish[];

  ngOnInit(): void {

    this.dishservice.getDishData().then((dish) => this.dish = dish)
  }

}
