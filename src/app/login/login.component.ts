import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../registro/registro.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // usuário que representará o login
  usuario:Usuario = new Usuario();

  // mensagem caso exista algum erro de login
  erroLogin:any;

  // auth necessário para efetuar o login
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.usuario).subscribe(
      result =>{

      },
      err => {
        this.erroLogin = err.error;
      }
    )
  }

}
