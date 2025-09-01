import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiadListComponent } from './ziad-list.component';

describe('ZiadListComponent', () => {
  let component: ZiadListComponent;
  let fixture: ComponentFixture<ZiadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZiadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
