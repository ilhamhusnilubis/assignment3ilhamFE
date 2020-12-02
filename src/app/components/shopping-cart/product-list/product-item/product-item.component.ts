import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from '../../../../services/product.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 
  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

 

  // handleAddToWishlist() {
  //   this.wishlistService.addToWishlist(this.productItem.name).subscribe(() => {
  //     this.addedToWishlist = true;
  //   })
  // }

  // handleRemoveFromWishlist() {
  //   this.wishlistService.removeFromWishlist(this.productItem.name).subscribe(() => {
  //     this.addedToWishlist = false;
  //   })
  // }
  handleAddToCart() {
    console.log(this.productItem);
    
   this.cartService.addProductToCart(this.productItem).subscribe((res) => {
      this.msg.sendMsg(this.productItem)
      console.log(res);
      
    })
  }
  //simpan id

  // handleAddToCart(_id){
  //   let idUser
  //     this.cartService.addProductToCart(_id,idUser).subscribe(
  //       success=>{

  //       }, error=>{

  //       }
        
  //     )
  // }
}
