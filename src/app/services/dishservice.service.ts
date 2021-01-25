import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Injectable({
  providedIn: 'root'
})
export class DishserviceService {

  constructor() { }

  getDishData(): Promise<Dish[]> {
    return new Promise(resolve => {
      setInterval(() => resolve(DISHES), 2000);
    });
    // return new Promise((resolve)=>{resolve(DISHES)});
  }
  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      setInterval(() => resolve(DISHES.filter((dish) => dish.id === id)[0]));
    });
  }
  getFeaturedDish(): Promise<Dish> {
    return new Promise((resolve) => {
      setInterval(() => resolve(DISHES.filter((dish) => dish.featured)[0]))
    });
  }


}
