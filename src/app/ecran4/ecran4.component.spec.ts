import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran4Component } from './ecran4.component';

describe('Ecran4Component', () => {
  let component: Ecran4Component;
  let fixture: ComponentFixture<Ecran4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ecran4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
