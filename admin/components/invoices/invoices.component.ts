import { Component, OnInit } from '@angular/core';
import { InvoiceserviceService } from '../../services/invoiceservice.service';

import { Observable,of} from 'rxjs';
import { RsInvoices, Total } from '../../models/ResponseEntities';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

constructor(
private invoiceservice: InvoiceserviceService) { }
// *****
// properties
total: Total;
rsinvoice: RsInvoices[]= [];
rsinvoice$: Observable<RsInvoices[]>;
defaultnum = 0;
Domnum: number;
maxcon: number;
// properties

// get invoices
Invoices(id: number) {
this.invoiceservice.invoicelist(id).subscribe(value => {
this.rsinvoice$ = of(value);
});
}
// get total
Totalinvoice() {
this.invoiceservice.Totalinvoice().subscribe(value => {
this.total = value;
});
}
getpage(num: number) {
this.Totalinvoice();
this.Invoices(num);
}

  ngOnInit() {
this.Totalinvoice();
this.Invoices(this.defaultnum);
  }

}
