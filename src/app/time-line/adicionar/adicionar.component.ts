import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Acontecimento } from '../time.model';
import { AcontecimentoService } from '../time.service';
import { AuthService } from 'src/app/login/auth.service';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  // Acontecimento que será adicionado
  acontecimento:Acontecimento = new Acontecimento();

  constructor(public dialogRef: MatDialogRef<AdicionarComponent>,
              private acontecimentoService:AcontecimentoService,
              private authService:AuthService){
  }

  ngOnInit() {
    // quando iniciado, seta o id do usuário para o id do usuário logado
    this.acontecimento.userId = this.authService.usuarioLogado.id;
  }


  // se clicar fora, fecha o dialog
  onNoClick(): void {
    this.dialogRef.close();
  }

  // adicionar o acontecimento
  adicionar(){
    this.acontecimentoService.adicionar(this.acontecimento).subscribe(result=>{
    })
    // fecha o dialog
    this.dialogRef.close();
  }

}
