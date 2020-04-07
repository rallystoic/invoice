import { Component, OnInit } from '@angular/core';
import { InvoiceserviceService } from '../../services/invoiceservice.service';
import { ActivatedRoute} from '@angular/router';
// response entities
import { Rsinvoice } from '../../models/ResponseEntities';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.css']
})
export class InvoicedetailComponent implements OnInit {

constructor(
private invoiceservice: InvoiceserviceService,
private route: ActivatedRoute
) { }
// Properties
rsinvoice: Rsinvoice;
// End of Properties


FetchinvoiceDetail() {
const id = + this.route.snapshot.paramMap.get('id');
this.invoiceservice.Invoicedetail(id).subscribe(x => {
this.rsinvoice = x;
// console.log(this.rsinvoice.rsitems);
});

}

  ngOnInit() {
this.FetchinvoiceDetail();
  }

}
