import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemovesellerComponent } from './add-removeseller.component';

describe('AddRemovesellerComponent', () => {
  let component: AddRemovesellerComponent;
  let fixture: ComponentFixture<AddRemovesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemovesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemovesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
