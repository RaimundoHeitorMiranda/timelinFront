import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Acontecimento } from '../time.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AcontecimentoService } from '../time.service';

@Component({
  selector: 'app-acontecimento',
  templateUrl: './acontecimento.component.html',
  styleUrls: ['./acontecimento.component.css']
})
export class AcontecimentoComponent implements OnInit {

  // recebe um acontecimento
  @Input()acontecimento:Acontecimento;

  // emite um evento para quando um acontecimento for deletado
  @Output() acontecimentoDeletado = new EventEmitter<boolean>();

  // Flag para exibir ou não a descrição
  show:boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // retorna o codigo css para a cor do acontecimento
  cor(acontecimento:Acontecimento):any{
    return {'background-color':acontecimento.cor};
  }

  // formata a data para uma data brasileira
  formatData():string{
    let data = new Date(this.acontecimento.data);
    let dia  = data.getDate().toString();
    //+1 pq os meses começa com 0
    let mes  = (data.getMonth()+1).toString();
    // convert to string
    let ano = data.getFullYear() +"";

    //formatando dia 1->01
    if(dia.length == 1){
      dia = "0" + dia;
    }

    //formatando mes 1 -> 01
    if(mes.length == 1){
      mes = "0"+mes;
    }
    return  `${dia}/${mes}/${ano}`;
  }

  // Deletar um acontecimento
  DeletarDialog(): void {

    // abre um dialog(modal)
    const dialogRef = this.dialog.open(DeletarConfirmDialog, {
      width: '1000px',
      data: {acontecimentoId: this.acontecimento.id}
    });

    // quando o dialog fechar emite um evento para o TimeLineComponent avisando que
    // um acontecimento foi deletado
    dialogRef.afterClosed().subscribe(result => {
      this.acontecimentoDeletado.emit(true);
    });
  }

}

// Pequeno componente para confirmar a exclusão
@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<div>
              <h3>Deseja Mesmo Deletar?</h3>
              <button (click)="deletar()">Sim</button>
            </div>`,
})
export class DeletarConfirmDialog {

  constructor(
    public dialogRef: MatDialogRef<DeletarConfirmDialog>,
    //recebe o id enviado pelo AcontecimentoComponent
    @Inject(MAT_DIALOG_DATA) public data: any,
    private acontecimentoService:AcontecimentoService) {}

  // se clicar fora fecha o dialog
  onNoClick(): void {
    this.dialogRef.close();
  }

  // deleta um acontecimento e fecha o dialog
  deletar(){
    this.acontecimentoService.deletar(this.data.acontecimentoId).subscribe();
    this.dialogRef.close();
  }

}
