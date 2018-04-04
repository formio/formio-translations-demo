import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseappEditComponent } from './phraseapp-edit.component';

describe('PhraseappEditComponent', () => {
  let component: PhraseappEditComponent;
  let fixture: ComponentFixture<PhraseappEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseappEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseappEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
