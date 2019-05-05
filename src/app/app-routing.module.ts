import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscreverUsuarioComponent} from  './inscrever-usuario/inscrever-usuario.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';


const routes: Routes = [
  {
    path: 'inscrever/:id', component: InscreverUsuarioComponent
  },
  {
    path: 'listarCursos', component: ListarCursosComponent
  },
  {
    path: 'listarUsuarios', component: ListarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
