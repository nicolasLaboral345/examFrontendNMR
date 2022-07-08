import { TestBed } from '@angular/core/testing';

import { ContactosServService } from './contactos-serv.service';

describe('ContactosServService', () => {
  let service: ContactosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
