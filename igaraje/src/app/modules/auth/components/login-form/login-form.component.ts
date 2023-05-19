import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ERRORS_VALIDATIONS } from '@core/constants/errors/mensajes.validators.const';
import { UserLoginSchema } from '@data/schemas/user.login.shema';
// import { AuthLogin } from '@modules/auth/store/auth.action';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  /**
   * ! Variable observadora
   * ? Se declara el observable del estado
   */
  auth$ = new Observable<any>();

  /**
   * ? Nuestro formulario
   */
  miFormulario: FormGroup = new FormGroup({});

  /**
   * ? Mensaje de formulario
   */
  mensajesError = ERRORS_VALIDATIONS;

  /**
   * ? Mostrar/Ocultar password
   */
  isPasswordVisible: boolean = false;

  /**
   * @param formBuilder Para crear el formulario
   */
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  ngOnDestroy(): void {
  }

  /**
   * ! Inicializando formulario
   * ? Aquí damos formula al formulario
   * ? establecemos los campos a utilizar
   */
  private construirFormulario() {
    this.miFormulario = this.formBuilder.group(
      {
        user: [
          '',
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(16),
              // Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
            ]
          )
        ],
        password: [
          '',
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(18),
              // Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,18}$')
            ]
          )
        ]
      }
    );
  }

  /**
   * Retorna el valor del campo username
   */
  get user() {
    return this.miFormulario.get('user');
  }

  /**
   * Retorna el valor del campo password
   */
  get password() {
    return this.miFormulario.get('password');
  }

  login() {
    if(this.miFormulario.valid) {
      const usuario: UserLoginSchema = { ...this.miFormulario.value };
      usuario.mac = 'AA:BB:CC:DD';
      // this._store.dispatch(AuthLogin({data: usuario}));
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      if (this.isPasswordVisible) {
        passwordInput.setAttribute('type', 'text');
        // document.getElementById('password-toggle').innerText = 'Ocultar';
        passwordInput.setAttribute('data-password', 'false');
      } else {
        passwordInput.setAttribute('type', 'password');
        // document.getElementById('password-toggle').innerText = 'Mostrar';
        passwordInput.setAttribute('data-password', 'true');
      }
    }
  }
}
