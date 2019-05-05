import { Component, OnInit } from '@angular/core';
import { CursosUsuariosService } from '../cursos-usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscrever-usuario',
  templateUrl: './inscrever-usuario.component.html',
  styleUrls: ['./inscrever-usuario.component.css']
})
export class InscreverUsuarioComponent implements OnInit {

  usuario: any ={
    id: null,
    idCurso: null,
    nome: '',
    email: '',
    dataNascimento: '',
    telefone: ''
  }

  constructor(private service: CursosUsuariosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        this.usuario.idCurso = id; 
        this.usuario.id = null;
      }
    );
  }

  salvarUsuario(){
    this.service.inserirUsuario(this.usuario).subscribe(
      success => {
        alert("Usuário " + this.usuario.nome + " inscrito com sucesso.");
        var formulario = document.getElementsByTagName("form");
        formulario[0].reset();
      },
      error => alert("Erro ao realizar a inscrição")
    );
  }

}
