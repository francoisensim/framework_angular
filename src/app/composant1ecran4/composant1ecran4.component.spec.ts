import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant1ecran4Component } from './composant1ecran4.component';

describe('Composant1ecran4Component', () => {
  let component: Composant1ecran4Component;
  let fixture: ComponentFixture<Composant1ecran4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant1ecran4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Composant1ecran4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
