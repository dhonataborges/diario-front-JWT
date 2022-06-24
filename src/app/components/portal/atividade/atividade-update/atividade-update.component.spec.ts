import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeUpdateComponent } from './atividade-update.component';

describe('AtividadeUpdateComponent', () => {
  let component: AtividadeUpdateComponent;
  let fixture: ComponentFixture<AtividadeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
