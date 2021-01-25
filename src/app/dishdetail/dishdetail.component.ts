import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Router,ActivatedRoute } from '@angular/router';
import { DishserviceService } from '../services/dishservice.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  activeRoute:Dish;

  constructor(private activeout:ActivatedRoute,private dishservice:DishserviceService,private location:Location) { }

  ngOnInit(): void {


    const id = this.activeout.snapshot.params['id'];
    
    this.dishservice.getDish(id).then((activeRoute)=> this.activeRoute = activeRoute);  
    // this.activeRoute = this.dishservice.getDish(id);
    console.log(this.activeRoute);
  }
  goBack(){
    this.location.back();
  }
 
}
