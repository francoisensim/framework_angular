import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran10Component } from './ecran10.component';

describe('Ecran10Component', () => {
  let component: Ecran10Component;
  let fixture: ComponentFixture<Ecran10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
