import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran3Component } from './ecran3.component';

describe('Ecran3Component', () => {
  let component: Ecran3Component;
  let fixture: ComponentFixture<Ecran3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
