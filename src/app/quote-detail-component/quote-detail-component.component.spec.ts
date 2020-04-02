import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailComponentComponent } from './quote-detail-component.component';

describe('QuoteDetailComponentComponent', () => {
  let component: QuoteDetailComponentComponent;
  let fixture: ComponentFixture<QuoteDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
