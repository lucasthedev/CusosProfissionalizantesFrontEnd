import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { InscreverUsuarioComponent } from './inscrever-usuario/inscrever-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UtilitariosModule } from './utilitarios/utilitarios.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarCursosComponent,
    InscreverUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    UtilitariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
