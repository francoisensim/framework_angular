import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran9Component } from './ecran9.component';

describe('Ecran9Component', () => {
  let component: Ecran9Component;
  let fixture: ComponentFixture<Ecran9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
