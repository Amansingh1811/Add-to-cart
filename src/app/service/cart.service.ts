import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist : any = []
  public productlist = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<any>('')

  constructor() { }
  getPorduct(){
    return this.productlist.asObservable();
  }
  setProduct(product : any){
    this.cartitemlist.push(...product)
    this.productlist.next(product)
  }
  addtoCart(product : any){
    this.cartitemlist.push(product)
    this.productlist.next(this.cartitemlist)
    this.getTotalPrice();
    console.log(this.cartitemlist);
    
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartitemlist.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal
  }
  removecartitem(product:any){
    this.cartitemlist.map((a:any, index:any)=>{
      if(product.id === a.id)
      this.cartitemlist.splice(index,1)
    })
    this.productlist.next(this.cartitemlist)
  }
  removeAllCart(){
    this.cartitemlist = []
    this.productlist.next(this.cartitemlist)
  }
}
