import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant3ecran4Component } from './composant3ecran4.component';

describe('Composant3ecran4Component', () => {
  let component: Composant3ecran4Component;
  let fixture: ComponentFixture<Composant3ecran4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant3ecran4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Composant3ecran4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
