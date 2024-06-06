import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurPortableProfessionnelComponent } from './ordinateur-portable-professionnel.component';

describe('OrdinateurPortableProfessionnelComponent', () => {
  let component: OrdinateurPortableProfessionnelComponent;
  let fixture: ComponentFixture<OrdinateurPortableProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinateurPortableProfessionnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdinateurPortableProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
