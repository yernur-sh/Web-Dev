import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Latest Apple smartphone with A16 chip.',
      price: 650000,
      rating: 4.8,
      image: 'https://example.com/iphone.jpg',
      images: [
        'https://example.com/iphone1.jpg',
        'https://example.com/iphone2.jpg',
        'https://example.com/iphone3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/example'
    },

    // тағы 9 продукт қосу керек (міндетті түрде 10+)
  ];

}
