import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListPage } from './asset-list.page';

describe('AssetListPage', () => {
  let component: AssetListPage;
  let fixture: ComponentFixture<AssetListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
