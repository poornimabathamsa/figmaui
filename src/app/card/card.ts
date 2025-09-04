import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  products = [
    { name: 'Product 1', image: 'assets/img1.jpg', description: 'This is a description of Product 1.' },
    { name: 'Product 2', image: 'assets/img2.jpg', description: 'This is a description of Product 2.' },
    { name: 'Product 3', image: 'assets/img3.jpg', description: 'This is a description of Product 3.' },
    { name: 'Product 4', image: 'assets/img3.jpg', description: 'This is a description of Product 4.' },
    { name: 'Product 4', image: 'assets/img3.jpg', description: 'This is a description of Product 4.' },

    { name: 'Product 4', image: 'assets/img3.jpg', description: 'This is a description of Product 4.' },

    { name: 'Product 4', image: 'assets/img3.jpg', description: 'This is a description of Product 4.' },

  ];
  
}
