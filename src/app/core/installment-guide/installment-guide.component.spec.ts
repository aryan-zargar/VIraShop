import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentGuideComponent } from './installment-guide.component';

describe('InstallmentGuideComponent', () => {
  let component: InstallmentGuideComponent;
  let fixture: ComponentFixture<InstallmentGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
