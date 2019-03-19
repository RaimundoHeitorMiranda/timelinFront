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

  acontecimentos:Acontecimento[] = [];
  color:any ={'background-color':'green'};

  constructor(public dialog: MatDialog,
              private acontecimentoService:AcontecimentoService) { }

  ngOnInit() {
    this.acontecimentoService.buscar().subscribe(result =>{
      console.log(this.acontecimentos)
      this.acontecimentos = result;
    })
  }

  AdicionarDialog(): void {
    const dialogRef = this.dialog.open(AdicionarComponent, {
      width: '1000px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  acontecimentoDeletado(flag: boolean) {
    if(flag){
      this.ngOnInit();
    }
  }

}
