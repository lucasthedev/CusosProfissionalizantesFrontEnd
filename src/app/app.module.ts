import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { InscreverUsuarioComponent } from './inscrever-usuario/inscrever-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCursosComponent,
    InscreverUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
