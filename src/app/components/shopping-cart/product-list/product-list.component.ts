import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product$: Observable<Product[]>;
  productList: Product[] = []
  wishlist: number[] = []

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.loadProducts();
    // this.loadWishlist();
    this.product$ = this.productService.getProduct();
  }

  loadProducts() {
    this.productService.getProduct().subscribe((products) => {
      this.productList = products;
    })
  }

  // loadWishlist() {
  //   this.wishlistService.getWishlist().subscribe(productIds => {
  //     this.wishlist = productIds
  //   })
  // }
 
}
