import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

type ProductType = {
  id: number;
  name: string;
  image: string;
  description: string;
};

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  product: ProductType | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the product from the navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.product = navigation.extras.state['product'];
    }

    // If no product in state, you might want to fetch it using the ID
    if (!this.product) {
      const productId = this.route.snapshot.paramMap.get('id');
      if (productId) {
        // Here you would typically fetch the product from a service
        // For now, we'll just navigate back if no product is found
        this.router.navigate(['/']);
      }
    }
  }
}
