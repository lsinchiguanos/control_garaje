import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  home = INTERNAL_ROUTES_PATHS.HOME;
  bitacora = INTERNAL_ROUTES_PATHS.BITACORA_LISTAR;
  vehiculos = INTERNAL_ROUTES_PATHS.VEHICULO_LISTADO;
  categoria = INTERNAL_ROUTES_PATHS.VEHICULO_TIPOS;
  residentes = INTERNAL_ROUTES_PATHS.RESIDENTES_LISTAR;
  error_mantenimiento = INTERNAL_ROUTES_PATHS.ERROR_WORKING;

  constructor() { }

  ngOnInit(): void {
  }

}
