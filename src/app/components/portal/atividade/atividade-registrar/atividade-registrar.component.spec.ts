import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeRegistrarComponent } from './atividade-registrar.component';

describe('AtividadeRegistrarComponent', () => {
  let component: AtividadeRegistrarComponent;
  let fixture: ComponentFixture<AtividadeRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
