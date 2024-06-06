import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran2Component } from './ecran2.component';

describe('Ecran2Component', () => {
  let component: Ecran2Component;
  let fixture: ComponentFixture<Ecran2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
