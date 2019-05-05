import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { CursosUsuariosService } from '../cursos-usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuarios[];
  contador: number = 0;

  constructor(private service: CursosUsuariosService) { }

  ngOnInit() {
    this.service.listarUsuarios()
      .subscribe(dados =>{
        this.usuarios = dados;
        this.setDescricao();
        this.formatarData();
      } 
    );
  }

  formatarData(){
    this.contador = 0;
    for(let data of this.usuarios){
      let data = new Date(this.usuarios[this.contador].dataNascimento);
      let dia = data.getDate().toString().padStart(2, '0');
      let mes = (data.getMonth()+1).toString().padStart(2, '0');
      let ano = data.getFullYear().toString();
      this.usuarios[this.contador].dataNascimento = dia + "/" + mes + "/" + ano;
      this.contador++;
    }
  }

  setDescricao(){
    for(let dado of this.usuarios){
      if(dado.idCurso == 1){
        this.usuarios[this.contador].descricaoCurso = "Gastronomia";
      }
      if(dado.idCurso == 2){
        this.usuarios[this.contador].descricaoCurso = "Enfermagem";
      }
      if(dado.idCurso == 3){
        this.usuarios[this.contador].descricaoCurso = "Farmácia";
      }
      if(dado.idCurso == 4){
        this.usuarios[this.contador].descricaoCurso = "Desenvolvimento de Software";
      }
      if(dado.idCurso == 5){
        this.usuarios[this.contador].descricaoCurso = "Administração";
      }
      this.contador++;
    }
  }

}
