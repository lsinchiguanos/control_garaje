import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentes-listado',
  templateUrl: './residentes-listado.component.html',
  styleUrls: ['./residentes-listado.component.css']
})
export class ResidentesListadoComponent implements OnInit {

  listado_bitacora: any [] = [];
  _cantidad: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

  onPageSizeChanged(event: any) {
    this._cantidad = event.value;
  }

  buscarClientes(event: any) {
    // let cadena: string = event.value;
    // if(cadena.trim().length > 0)
    //   this._store.dispatch(ClientesFiltro({filtro: cadena}));
    // else
    //   this.listado_clientes = [];
  }

}
