import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * ? Mostrar/Ocultar password
   */
  isPasswordVisible: boolean = false;

  // lockscreen = INTERNAL_ROUTES_PATHS.LOCKSCREEN;
  usuarios_perfil = INTERNAL_ROUTES_PATHS.USUARIOS_PERFIL;
  usuarios_configuraciones = INTERNAL_ROUTES_PATHS.USUARIOS_CONFIGURACIONES;
  // usuarios_soporte = INTERNAL_ROUTES_PATHS.USUARIOS_SOPORTE;

  /**
   * + Referencia del modal activo
   */
  private _modalActivo: NgbModalRef | any;

  constructor(private _servicioModal: NgbModal) { }

  ngOnInit(): void {
  }

  /**
   * ! Editar estado contrato
   * @param content Modal a mostrar
   */
  cambioContra(content: any) {
    this._modalActivo = this._servicioModal.open(content, { centered: true, size: 'lg', scrollable: true, backdrop: 'static', keyboard: false });
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
