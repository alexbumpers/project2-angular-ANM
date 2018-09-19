import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyServiceTestComponent } from './spotify-service-test.component';

describe('SpotifyServiceTestComponent', () => {
  let component: SpotifyServiceTestComponent;
  let fixture: ComponentFixture<SpotifyServiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyServiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
