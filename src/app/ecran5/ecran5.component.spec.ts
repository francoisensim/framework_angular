import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran5Component } from './ecran5.component';

describe('Ecran5Component', () => {
  let component: Ecran5Component;
  let fixture: ComponentFixture<Ecran5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
