import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  anyo = new Date().getFullYear();
  login = INTERNAL_ROUTES_PATHS.AUTH_LOGIN;

  constructor() {
  }

  ngOnInit(): void {
  }

}
