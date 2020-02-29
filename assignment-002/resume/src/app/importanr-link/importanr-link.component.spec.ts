import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanrLinkComponent } from './importanr-link.component';

describe('ImportanrLinkComponent', () => {
  let component: ImportanrLinkComponent;
  let fixture: ComponentFixture<ImportanrLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanrLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanrLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
