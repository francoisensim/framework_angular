import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran13Component } from './ecran13.component';

describe('Ecran13Component', () => {
  let component: Ecran13Component;
  let fixture: ComponentFixture<Ecran13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
