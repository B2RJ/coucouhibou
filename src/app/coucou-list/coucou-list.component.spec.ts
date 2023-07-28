import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucouListComponent } from './coucou-list.component';

describe('CoucouListComponent', () => {
  let component: CoucouListComponent;
  let fixture: ComponentFixture<CoucouListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoucouListComponent]
    });
    fixture = TestBed.createComponent(CoucouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
