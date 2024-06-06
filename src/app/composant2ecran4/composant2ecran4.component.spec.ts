import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant2ecran4Component } from './composant2ecran4.component';

describe('Composant2ecran4Component', () => {
  let component: Composant2ecran4Component;
  let fixture: ComponentFixture<Composant2ecran4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant2ecran4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Composant2ecran4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
