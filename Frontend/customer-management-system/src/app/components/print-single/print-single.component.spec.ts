import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSingleComponent } from './print-single.component';

describe('PrintSingleComponent', () => {
  let component: PrintSingleComponent;
  let fixture: ComponentFixture<PrintSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
