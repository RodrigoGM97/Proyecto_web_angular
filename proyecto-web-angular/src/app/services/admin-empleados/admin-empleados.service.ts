import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminEmpleadosService {

  constructor() { }

  getEmpleado() {
    return [
      {
        nombre:"José Ramirez Cruz",
        correo:"JoseRamirezC@CFE.com"
      },
      {
        nombre:"Rodrigo Pedazo García Mayo",
        correo:"RodGarciaMayo@CFE.com"
      }
    ];
  }
}
