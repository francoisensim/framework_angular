import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran11Component } from './ecran11.component';

describe('Ecran11Component', () => {
  let component: Ecran11Component;
  let fixture: ComponentFixture<Ecran11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
