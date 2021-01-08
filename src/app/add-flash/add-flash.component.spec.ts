import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashComponent } from './add-flash.component';

describe('AddFlashComponent', () => {
  let component: AddFlashComponent;
  let fixture: ComponentFixture<AddFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
