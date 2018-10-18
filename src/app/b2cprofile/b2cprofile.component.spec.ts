import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cprofileComponent } from './b2cprofile.component';

describe('B2cprofileComponent', () => {
  let component: B2cprofileComponent;
  let fixture: ComponentFixture<B2cprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
