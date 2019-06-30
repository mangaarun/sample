import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListPage } from './tag-list.page';

describe('TagListPage', () => {
  let component: TagListPage;
  let fixture: ComponentFixture<TagListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
