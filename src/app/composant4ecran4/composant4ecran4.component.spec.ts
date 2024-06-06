import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant4ecran4Component } from './composant4ecran4.component';

describe('Composant4ecran4Component', () => {
  let component: Composant4ecran4Component;
  let fixture: ComponentFixture<Composant4ecran4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant4ecran4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Composant4ecran4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
