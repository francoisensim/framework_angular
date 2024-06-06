import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran3composant3Component } from './ecran3composant3.component';

describe('Ecran3composant3Component', () => {
  let component: Ecran3composant3Component;
  let fixture: ComponentFixture<Ecran3composant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran3composant3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran3composant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
