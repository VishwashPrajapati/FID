import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  cartItems = [
    {id:1,pid:'545'}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
