import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicidadeComponent } from './editar-publicidade.component';

describe('EditarPublicidadeComponent', () => {
  let component: EditarPublicidadeComponent;
  let fixture: ComponentFixture<EditarPublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
