import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran6Component } from './ecran6.component';

describe('Ecran6Component', () => {
  let component: Ecran6Component;
  let fixture: ComponentFixture<Ecran6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
