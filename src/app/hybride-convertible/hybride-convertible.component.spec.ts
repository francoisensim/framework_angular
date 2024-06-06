import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybrideConvertibleComponent } from './hybride-convertible.component';

describe('HybrideConvertibleComponent', () => {
  let component: HybrideConvertibleComponent;
  let fixture: ComponentFixture<HybrideConvertibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybrideConvertibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HybrideConvertibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
