import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public grandTotal !: number;

  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getPorduct()
    .subscribe(res=>{
      this.product = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }
  removecartmethod(item:any){
    this.cartService.removecartitem(item)
  }
  removeAllCart(){
    this.cartService.removeAllCart()
  }


}
