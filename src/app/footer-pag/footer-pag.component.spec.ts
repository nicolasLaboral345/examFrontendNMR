import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPagComponent } from './footer-pag.component';

describe('FooterPagComponent', () => {
  let component: FooterPagComponent;
  let fixture: ComponentFixture<FooterPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
