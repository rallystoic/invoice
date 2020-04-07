import { TestBed } from '@angular/core/testing';

import { InvoiceserviceService } from './invoiceservice.service';

describe('InvoiceserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceserviceService = TestBed.get(InvoiceserviceService);
    expect(service).toBeTruthy();
  });
});
