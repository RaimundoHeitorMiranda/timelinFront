import { Component, OnInit } from '@angular/core';
import { Usuario } from './registro.model';
import { RegistroService } from './registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Usuário para cadastro
  usuario:Usuario = new Usuario();

  // Senha de confirmação
  senhaConf:String = "";

  // Mensagem de erro
  erroMenssage:string = "";

  // erro de registro
  errorRegistro:string;

  constructor(private registroService:RegistroService,
              private router:Router) { }

  ngOnInit() {
  }

  // Verifica se o nome é válido
  verificaNome():boolean{
    if(this.usuario.nome == undefined){
      this.erroMenssage = "Por Favor Digite um Nome"
      return false;
    }else{
      return true;
    }
  }

  // Verifica se o email é válido
  verficiaEmail():boolean{
    if(this.usuario.email == undefined){
      this.erroMenssage = "Agora um Email"
      return false;
    }

    if(this.usuario.email.indexOf('@') == -1){
      this.erroMenssage = "Email Inválido."
      return false;
    }else{
      return true;
    }
  }

  // Verifica se as senha são iguais
  verificaSenha():boolean{
    if(this.usuario.senha == undefined){
      this.erroMenssage = "Por favor Digite a senha";
      return false;
    }
    if(this.usuario.senha != this.senhaConf){
      this.erroMenssage = "As senhas não são iguais."
      return false;
    }else{
      return true;
    }
  }

  verificaCampos():boolean{
    if(this.verificaNome() && this.verficiaEmail() && this.verificaSenha()){
      return true;
    }else{
      return false;
    }
  }

  registrar(){
    this.registroService.registrar(this.usuario).subscribe(
      result =>{
        console.log(result);
        this.usuario = result;
      },
      err => {
        console.log(err);
        this.errorRegistro = err.error;
      },
      ()=>{
        this.router.navigate(['/login'])
      }
    )
  }

}
