import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist: any
  searchKey:string = "";
  constructor(private api: ApiService, private CartService: CartService) { }

  ngOnInit(): void {
    this.api.getproducts().subscribe(res => {
      this.productlist = res;


      this.productlist.forEach((a: any) => {
        Object.assign(a, { quentity: 1, total: a.price })
      });
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchKey= val;
    })
  }
  addtoCart(item: any) {
    this.CartService.addtoCart(item)
  }
}
