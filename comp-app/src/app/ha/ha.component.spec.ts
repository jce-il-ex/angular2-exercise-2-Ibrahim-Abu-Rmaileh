/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaComponent } from './ha.component';

describe('HaComponent', () => {
  let component: HaComponent;
  let fixture: ComponentFixture<HaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
