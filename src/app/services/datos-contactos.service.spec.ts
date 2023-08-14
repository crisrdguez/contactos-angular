import { TestBed } from '@angular/core/testing';

import { DatosContactosService } from './datos-contactos.service';

describe('DatosContactosService', () => {
  let service: DatosContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
