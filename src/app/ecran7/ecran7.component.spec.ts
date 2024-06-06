import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran7Component } from './ecran7.component';

describe('Ecran7Component', () => {
  let component: Ecran7Component;
  let fixture: ComponentFixture<Ecran7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
