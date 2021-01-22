import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { from, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  subject = new Subject();

  constructor() { }

  addToCart(product:Dish){
    this.subject.next(product);
  }
  toCart(){
    this.subject.asObservable();
  }

}
