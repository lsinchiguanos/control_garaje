import { Component, OnInit } from '@angular/core';
import { LocalService } from '@core/shared/services/almacenamiento/local.service';

@Component({
  selector: 'app-bitacora-listado',
  templateUrl: './bitacora-listado.component.html',
  styleUrls: ['./bitacora-listado.component.css']
})
export class BitacoraListadoComponent implements OnInit {

  listado_bitacora: any [] = [];
  _cantidad: number = 25;

  constructor(private _cookiesService: LocalService) { }

  ngOnInit(): void {
    this.deleteDataLocal();
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
