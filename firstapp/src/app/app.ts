import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./product/product";
import { Dashboard } from './dashboard/dashboard';
import { Profile } from "./profile/profile";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [Product, Dashboard, Profile, About, Contact,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular App";
}
