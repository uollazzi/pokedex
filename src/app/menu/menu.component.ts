import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title: string = "";

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.title = environment.TITOLO;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
