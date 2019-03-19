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

  acontecimento:Acontecimento = new Acontecimento();

  constructor(public dialogRef: MatDialogRef<AdicionarComponent>,
              private acontecimentoService:AcontecimentoService,
              private authService:AuthService){
  }

  ngOnInit() {
    this.acontecimento.userId = this.authService.usuarioLogado.id;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  adicionar(){
    this.acontecimentoService.adicionar(this.acontecimento).subscribe(result=>{
      console.log("resutado",result)
      this.dialogRef.close();
    })
  }

}
