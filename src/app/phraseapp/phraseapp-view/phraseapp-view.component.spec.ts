import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseappViewComponent } from './phraseapp-view.component';

describe('PhraseappViewComponent', () => {
  let component: PhraseappViewComponent;
  let fixture: ComponentFixture<PhraseappViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseappViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseappViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
