import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { LoginDto } from '../models/user';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router) { }

  myForm: FormGroup = new FormGroup({});

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   count: new FormControl(0)
    // });

    this.myForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required]],
    });

    // intercettare cambiamenti
    this.myForm.valueChanges
      .pipe(
        map((value) => {
          value.name = value.name.toUpperCase();
          return value;
        }),
        filter((value) => this.myForm.valid)
      )
      .subscribe((value) => {
        console.log("Reactive Form valida = ", value);
      });
  }

  get email() { return this.myForm.get('email'); }

  get password() { return this.myForm.get('password'); }

  onSubmit() {
    console.log('Valid', this.myForm.valid);
    console.log('Nome', this.myForm.value.name);
    console.log('Email', this.myForm.value.email);
    console.log('Conteggio', this.myForm.value.count);
    console.log(this.myForm.controls["email"].hasError("required"))
    console.log(this.myForm.getRawValue());

    const loginData: LoginDto = this.myForm.value as LoginDto;
    this.authService.login(loginData).subscribe(u => {
      this.authService.setLoggedUser(u);
      this.router.navigate(["pokemons", "catturati"]);
    });
  }
}
