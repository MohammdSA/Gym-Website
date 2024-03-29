import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingClassesComponent } from './upcoming-classes.component';

describe('UpcomingClassesComponent', () => {
  let component: UpcomingClassesComponent;
  let fixture: ComponentFixture<UpcomingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
