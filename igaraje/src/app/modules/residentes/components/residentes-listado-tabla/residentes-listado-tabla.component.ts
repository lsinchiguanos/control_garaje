import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentes-listado-tabla',
  templateUrl: './residentes-listado-tabla.component.html',
  styleUrls: ['./residentes-listado-tabla.component.css']
})
export class ResidentesListadoTablaComponent implements OnInit {

  @Input() bitacoralistado!: any[];
  @Input() cantidad_items: number = 25;
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
