import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontecimentoComponent } from './acontecimento.component';

describe('AcontecimentoComponent', () => {
  let component: AcontecimentoComponent;
  let fixture: ComponentFixture<AcontecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
