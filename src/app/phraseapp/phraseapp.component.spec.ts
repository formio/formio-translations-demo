import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseappComponent } from './phraseapp.component';

describe('PhraseappComponent', () => {
  let component: PhraseappComponent;
  let fixture: ComponentFixture<PhraseappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
