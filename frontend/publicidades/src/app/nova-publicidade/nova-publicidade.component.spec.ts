import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPublicidadeComponent } from './nova-publicidade.component';

describe('NovaPublicidadeComponent', () => {
  let component: NovaPublicidadeComponent;
  let fixture: ComponentFixture<NovaPublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaPublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
