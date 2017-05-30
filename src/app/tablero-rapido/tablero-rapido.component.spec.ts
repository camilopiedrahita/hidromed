import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroRapidoComponent } from './tablero-rapido.component';

describe('TableroRapidoComponent', () => {
  let component: TableroRapidoComponent;
  let fixture: ComponentFixture<TableroRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
