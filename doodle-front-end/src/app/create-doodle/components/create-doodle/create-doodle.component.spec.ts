import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoodleComponent } from './create-doodle.component';

describe('CreateDoodleComponent', () => {
  let component: CreateDoodleComponent;
  let fixture: ComponentFixture<CreateDoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDoodleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
