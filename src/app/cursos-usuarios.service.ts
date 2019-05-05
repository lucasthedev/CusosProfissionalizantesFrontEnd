import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Cursos } from './cursos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '',
    'Access-Control-Allow-Origin': '*'
  })
};

httpOptions.headers.set("Access-Control-Allow-Origin","*");

@Injectable({
  providedIn: 'root'
})
export class CursosUsuariosService {

  constructor(private http: HttpClient) { }

  urlListarCursos: string = "http://localhost:8080/Profissional/rest/CursosController/listarCursos";

  listarCursos(){
    return this.http.get<Cursos[]>(this.urlListarCursos, httpOptions);
  }

  urlInserir: string = "http://localhost:8080/Profissional/rest/CursosController/inscreverUsuario";

  inserirUsuario(usuario: any){
    return this.http.post(this.urlInserir,usuario, httpOptions);
  }

}
