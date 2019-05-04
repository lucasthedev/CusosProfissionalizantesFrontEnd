import { Component, OnInit } from '@angular/core';
import { CursosUsuariosService } from '../cursos-usuarios.service';
import { Cursos } from '../cursos';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos: Cursos[];

  constructor(private service: CursosUsuariosService) { }

  ngOnInit() {
    this.service.listarCursos()
    .subscribe(dados => this.cursos = dados);
  }

}
