import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoodlesComponent } from './view-doodles.component';

describe('ViewDoodlesComponent', () => {
  let component: ViewDoodlesComponent;
  let fixture: ComponentFixture<ViewDoodlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoodlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
