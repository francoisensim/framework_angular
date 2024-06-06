import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran12Component } from './ecran12.component';

describe('Ecran12Component', () => {
  let component: Ecran12Component;
  let fixture: ComponentFixture<Ecran12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
