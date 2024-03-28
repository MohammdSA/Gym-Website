import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComponent } from '../upcoming-classes/classes.component';

describe('ClassComponent', () => {
  let component: ClassComponent;
  let fixture: ComponentFixture<ClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
