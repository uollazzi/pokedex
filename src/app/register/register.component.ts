import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // model: RegisterDto = { email: "", password: "", nome: "" };
  model = new RegisterDto();

  constructor(public authService: AuthService, private router: Router) {

  }

  register() {
    this.authService.register(this.model).subscribe(u => {

      this.authService.setLoggedUser(u);

      this.model = new RegisterDto();

      this.router.navigate(["pokemons"]);
    });
  }
}
