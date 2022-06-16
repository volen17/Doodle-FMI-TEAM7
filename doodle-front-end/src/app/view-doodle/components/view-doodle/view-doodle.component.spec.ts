import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoodleComponent } from './view-doodle.component';

describe('ViewDoodleComponent', () => {
  let component: ViewDoodleComponent;
  let fixture: ComponentFixture<ViewDoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoodleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
