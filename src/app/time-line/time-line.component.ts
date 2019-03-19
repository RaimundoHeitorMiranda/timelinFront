import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AcontecimentoService } from './time.service';
import { Acontecimento } from './time.model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],

})
export class TimeLineComponent implements OnInit {

  // Lista de acontecimentos
  acontecimentos:Acontecimento[] = [];

  // color:any ={'background-color':'green'};

  constructor(public dialog: MatDialog,
              private acontecimentoService:AcontecimentoService) { }

  ngOnInit() {
    // ao inciar o component buscar todos os acontecimentos do usuário
    this.acontecimentoService.buscar().subscribe(result =>{
      this.acontecimentos = result;
    })
  }

  // Método que exibe o modal(dialog) para adicionar um acontecimento
  AdicionarDialog(): void {
    // abrindo o dialog
    const dialogRef = this.dialog.open(AdicionarComponent, {
      width: '1000px',
      data: {}
    });

    // quando o dialog fechar atualiza a lista de acontecimentos
    dialogRef.afterClosed().subscribe(result => {
      // espera por 1 segundo
      setTimeout(()=>{
        this.ngOnInit();
      },1000);
    });
  }

  // método que é chamado quando um acontecimento é deletado
  acontecimentoDeletado(flag: boolean) {
    if(flag){
      // atualiza  a lista de acontecimentos apoós um segundo
      setTimeout(()=>{
        this.ngOnInit();
      },1000);

    }
  }

}
