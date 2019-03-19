import { Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ContaComponent } from './conta/conta.component';

export const APP_ROUTES: Routes = [
  { path:'',component: SobreComponent},
  { path:'sobre',component: SobreComponent},
  { path:'contato',component: ContatoComponent},
  { path:'clientes',component: ClientesComponent},
  { path:'registro',component: RegistroComponent},
  { path:'login',component: LoginComponent},
  { path:'time',component: TimeLineComponent},
  { path:'conta',component: ContaComponent},

]
