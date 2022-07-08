import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalNavComponent } from './menu-principal-nav.component';

describe('MenuPrincipalNavComponent', () => {
  let component: MenuPrincipalNavComponent;
  let fixture: ComponentFixture<MenuPrincipalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrincipalNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
