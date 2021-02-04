import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDirectoryListComponent } from './phone-directory-list.component';

describe('PhoneDirectoryListComponent', () => {
  let component: PhoneDirectoryListComponent;
  let fixture: ComponentFixture<PhoneDirectoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneDirectoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDirectoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
