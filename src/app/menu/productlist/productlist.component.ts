import { Component, OnInit,Input } from '@angular/core';
import { Router,Navigation } from '@angular/router';
import { CartserviceService } from '../../services/cartservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private serv:CartserviceService) { }

  ngOnInit(): void {
  }

  @Input() dishitem;

  addcart(product){
    let vval = this.serv.addToCart(product);
    console.log(vval);
  }

}