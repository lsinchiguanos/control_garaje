import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.css']
})
export class NoFoundComponent implements OnInit {

  return_home = INTERNAL_ROUTES_PATHS.HOME;

  constructor() { }

  ngOnInit(): void {
  }

}
