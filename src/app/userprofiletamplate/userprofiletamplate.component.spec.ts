import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofiletamplateComponent } from './userprofiletamplate.component';

describe('UserprofiletamplateComponent', () => {
  let component: UserprofiletamplateComponent;
  let fixture: ComponentFixture<UserprofiletamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofiletamplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofiletamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
