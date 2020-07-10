import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetingFormComponent } from './user-seting-form.component';

describe('UserSetingFormComponent', () => {
  let component: UserSetingFormComponent;
  let fixture: ComponentFixture<UserSetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
