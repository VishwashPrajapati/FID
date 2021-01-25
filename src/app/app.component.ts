import { Component,OnInit } from '@angular/core';
import { DishserviceService } from './services/dishservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodInDabba';
  dishes:any;
  constructor(private dishserve:DishserviceService){}

  ngOnInit(){
    this.dishserve.getDishData().then((dishes)=>this.dishes = dishes)
  }

}
