import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInstallmentsListComponent } from './product-installments-list.component';

describe('ProductInstallmentsListComponent', () => {
  let component: ProductInstallmentsListComponent;
  let fixture: ComponentFixture<ProductInstallmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInstallmentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInstallmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
