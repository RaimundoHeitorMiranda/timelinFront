import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { RegistroComponent } from './registro/registro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ContaComponent } from './conta/conta.component';

const routes: Routes = [
  { path:'',component: SobreComponent},
  { path:'sobre',component: SobreComponent},
  { path:'contato',component: ContatoComponent},
  { path:'clientes',component: ClientesComponent},
  { path:'registro',component: RegistroComponent},
  { path:'login',component: LoginComponent},
  { path:'time',component: TimeLineComponent},
  { path:'conta',component: ContaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
