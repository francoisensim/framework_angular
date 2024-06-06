import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran3composant2Component } from './ecran3composant2.component';

describe('Ecran3composant2Component', () => {
  let component: Ecran3composant2Component;
  let fixture: ComponentFixture<Ecran3composant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran3composant2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran3composant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
