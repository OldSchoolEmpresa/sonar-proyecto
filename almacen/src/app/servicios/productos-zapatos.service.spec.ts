import { TestBed } from '@angular/core/testing';

import { ProductosZapatosService } from './productos-zapatos.service';

describe('ProductosZapatosService', () => {
  let service: ProductosZapatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosZapatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
