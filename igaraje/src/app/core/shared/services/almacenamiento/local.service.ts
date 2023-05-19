import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment as ENV } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private dataLocal: BehaviorSubject<any>;

  constructor() {
    this.dataLocal = new BehaviorSubject(localStorage.getItem(ENV.ls3));
  }

  setDataToLocalStorage(data: any) {
    localStorage.setItem(ENV.ls3, JSON.stringify(data));
  }

  delDataToLocalStorage() {
    localStorage.removeItem(ENV.ls3);
    this.dataLocal.next(null);
  }

  get getDataLocal() {
    return this.dataLocal;
  }
}
