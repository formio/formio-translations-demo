import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformFormiojsComponent } from './platform-formiojs.component';

describe('PlatformFormiojsComponent', () => {
  let component: PlatformFormiojsComponent;
  let fixture: ComponentFixture<PlatformFormiojsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformFormiojsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformFormiojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
