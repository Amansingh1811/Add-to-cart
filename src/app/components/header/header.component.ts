import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchterm: string ='';
  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getPorduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchterm = (event.target as HTMLInputElement).value;
    console.log(this.searchterm);
    this.cartService.search.next(this.searchterm);
  }

}
