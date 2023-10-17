import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NgIf} from "@angular/common";
import {LogoComponent} from "../logo/logo.component";

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    NgIf,
    LogoComponent
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(readonly authService: AuthService) {
  }
}