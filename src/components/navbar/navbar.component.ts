import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavButtonComponent } from "../nav-button/nav-button.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NavButtonComponent, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
