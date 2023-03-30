import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginDto } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginDto = { email: "", password: "" }

  constructor(public authService: AuthService) {

  }

  login() {
    this.authService.login(this.model).subscribe(u => {
      this.authService.setLoggedUser(u);
    });
  }
}
