import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran3composant1Component } from './ecran3composant1.component';

describe('Ecran3composant1Component', () => {
  let component: Ecran3composant1Component;
  let fixture: ComponentFixture<Ecran3composant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran3composant1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran3composant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
