import { Component, OnInit } from '@angular/core';
import { CursosUsuariosService } from '../cursos-usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../utilitarios/alert-modal/alert-modal.component';

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

  bsModalRef: BsModalRef;

  constructor(private service: CursosUsuariosService, private route: ActivatedRoute, private modalService: BsModalService) { }

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
        this.msgSucesso(this.usuario.nome);
        var formulario = document.getElementsByTagName("form");
        formulario[0].reset();
      },
      error => this.msgErro()
    );
  }

  msgSucesso(nome){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = 'success';
    this.bsModalRef.content.mensagem = 'Usuário ' + nome + ' inserido com sucesso.';
  }

  msgErro(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = 'danger';
    this.bsModalRef.content.mensagem = 'Ocorreu erro ao inserir o usuário';
  }

}
