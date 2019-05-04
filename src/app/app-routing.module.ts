import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscreverUsuarioComponent} from  './inscrever-usuario/inscrever-usuario.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';


const routes: Routes = [
  {
    path: 'inscrever/:id', component: InscreverUsuarioComponent
  },
  {
    path: 'listarCursos', component: ListarCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
