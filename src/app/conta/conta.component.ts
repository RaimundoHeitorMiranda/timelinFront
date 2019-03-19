import { Component, OnInit } from '@angular/core';
import { Usuario } from '../registro/registro.model';
import { AuthService } from '../login/auth.service';
import { ContaService } from './conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  // Usuário para atualização
  usuario:Usuario = new Usuario();

  // Senha de confirmação
  senhaConf:String = "";

  // Mensagem de erro
  erroMenssage:string = "";

  // flag que indica uma mudança de senha;
  mudarSenhaFlag= false;

  constructor(private authService:AuthService,
              private contaService:ContaService) { }

  ngOnInit() {
    // busca o usuário logado no sistema para poder alterar seus dados
    this.usuario = this.authService.usuarioLogado;
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
    // email é undefined?
    if(this.usuario.email == undefined){
      this.erroMenssage = "Agora um Email"
      return false;
    }

    // email possui '@'?
    if(this.usuario.email.indexOf('@') == -1){
      this.erroMenssage = "Email Inválido."
      return false;
    }else{
      return true;
    }
  }

  // Verifica se as senha são iguais
  verificaSenha():boolean{
    if(!this.mudarSenhaFlag){
      return true;
    }else{
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
  }

  verificaCampos():boolean{
    if(this.verificaNome() && this.verficiaEmail() && this.verificaSenha()){
      return true;
    }else{
      return false;
    }
  }

  atualizar(){
    this.contaService.atualizar(this.usuario).subscribe();
  }

}
