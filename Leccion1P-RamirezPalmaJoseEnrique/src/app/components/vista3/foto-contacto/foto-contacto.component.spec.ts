import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoContactoComponent } from './foto-contacto.component';

describe('FotoContactoComponent', () => {
  let component: FotoContactoComponent;
  let fixture: ComponentFixture<FotoContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoContactoComponent]
    });
    fixture = TestBed.createComponent(FotoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
