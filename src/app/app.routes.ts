import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Product } from './product/product';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { 
        path: 'login', 
        component: Login 
    },
    { 
        path: 'navbar', 
        component: Navbar,
        children: [
            { path: 'productdetails', component: Product },
            // Add other protected routes here
        ]
    },
    { path: '**', redirectTo: 'login' }  // Redirect to login for any unknown routes
];
