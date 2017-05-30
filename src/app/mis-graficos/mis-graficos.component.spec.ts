import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisGraficosComponent } from './mis-graficos.component';

describe('MisGraficosComponent', () => {
  let component: MisGraficosComponent;
  let fixture: ComponentFixture<MisGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
