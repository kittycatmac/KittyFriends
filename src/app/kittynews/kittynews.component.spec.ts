import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittynewsComponent } from './kittynews.component';

describe('KittynewsComponent', () => {
  let component: KittynewsComponent;
  let fixture: ComponentFixture<KittynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
