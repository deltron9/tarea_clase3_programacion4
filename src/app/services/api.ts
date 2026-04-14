import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);
  usuario = "deltron9";
  apiGithub = "https://api.github.com/users/";
  usuarioGithub = signal<any>(null);

  obtenerUsuario() {
    const peticion = this.http.get<any>(this.apiGithub + this.usuario)

    const suscripcion = peticion.subscribe((dato) => {
      if(dato) {
        this.usuarioGithub.set(dato);
      }

      suscripcion.unsubscribe();
    })  
  }
}