import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran8Component } from './ecran8.component';

describe('Ecran8Component', () => {
  let component: Ecran8Component;
  let fixture: ComponentFixture<Ecran8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
