import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiveSearchComponent } from './user-live-search.component';

describe('UserLiveSearchComponent', () => {
  let component: UserLiveSearchComponent;
  let fixture: ComponentFixture<UserLiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
