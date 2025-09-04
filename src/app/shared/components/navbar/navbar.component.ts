import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbDropdownModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Font Awesome Icons
  faUser = faUser;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  
  // Cart and wishlist counts
  cartCount = 0;
  wishlistCount = 0;
  
  // Search functionality
  searchQuery = '';
  
  onSearch() {
    // Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }
}
