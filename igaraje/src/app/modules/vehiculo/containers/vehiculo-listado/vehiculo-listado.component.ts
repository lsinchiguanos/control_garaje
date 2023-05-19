import { Component, OnInit } from '@angular/core';
import { LocalService } from '@core/shared/services/almacenamiento/local.service';

@Component({
  selector: 'app-vehiculo-listado',
  templateUrl: './vehiculo-listado.component.html',
  styleUrls: ['./vehiculo-listado.component.css']
})
export class VehiculoListadoComponent implements OnInit {

  listado_bitacora: any [] = [];
  _cantidad: number = 25;

  constructor(private _cookiesService: LocalService) { }

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

  private deleteDataLocal() {
    this._cookiesService.delDataToLocalStorage();
  }

}
