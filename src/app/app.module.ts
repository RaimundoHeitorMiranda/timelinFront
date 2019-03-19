// Angular core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Google maps module
import { AgmCoreModule } from '@agm/core';

// Material components
import { MatCheckboxModule,MatButtonModule,MatDialogModule } from '@angular/material';

// Color picker
import { ColorPickerModule } from 'ngx-color-picker';

// Rota
import { APP_ROUTES } from './routers.route';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { DeletarConfirmDialog } from './time-line/acontecimento/acontecimento.component';
import { ContaComponent } from './conta/conta.component';
import { AdicionarComponent } from './time-line/adicionar/adicionar.component'
import { AcontecimentoComponent } from './time-line/acontecimento/acontecimento.component'

// Servicos
import { RegistroService } from './registro/registro.service';
import { AuthService } from './login/auth.service';
import { ContaService } from './conta/conta.service';
import { AcontecimentoService } from './time-line/time.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    ContatoComponent,
    ClientesComponent,
    RegistroComponent,
    LoginComponent,
    TimeLineComponent,
    ContaComponent,
    AdicionarComponent,
    DeletarConfirmDialog,
    AcontecimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0'
    }),
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    ColorPickerModule
  ],
  providers: [
    RegistroService,
    AuthService,
    ContaService,
    AcontecimentoService,
  ],
  entryComponents: [
    AdicionarComponent,
    DeletarConfirmDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
