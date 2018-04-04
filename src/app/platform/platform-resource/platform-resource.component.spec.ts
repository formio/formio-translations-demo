import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformResourceComponent } from './platform-resource.component';

describe('PlatformResourceComponent', () => {
  let component: PlatformResourceComponent;
  let fixture: ComponentFixture<PlatformResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
