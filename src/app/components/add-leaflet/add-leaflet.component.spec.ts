import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeafletComponent } from './add-leaflet.component';

describe('AddLeafletComponent', () => {
  let component: AddLeafletComponent;
  let fixture: ComponentFixture<AddLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeafletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
