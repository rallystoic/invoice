import { Component, OnInit } from '@angular/core';
// *z
import { InvoiceserviceService } from '../../services/invoiceservice.service';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder} from '@angular/forms';

// request & repsonse *x
import { InvoicePayload, Iitemlist, ItemsForm } from 'src/app/admin/models/RequestEntities';
import { IssucceedInfomation } from 'src/app/admin/models/ResponseEntities';


// Request and response
import { CustomerserviceService  } from 'src/app/admin/services/customerservice.service';
// import {} from '../../models/ResponseEntities';


@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateinvoiceComponent implements OnInit {
// c
constructor(
private invoiceservice: InvoiceserviceService,
private customerservice: CustomerserviceService,
private route: ActivatedRoute,
private router: Router,
private fb: FormBuilder
  ) { }
// properties
invoicepayload = new InvoicePayload();
Iitemlists: Iitemlist[] = [];
issucceedinfomation: IssucceedInfomation;
item = new Iitemlist();
itemform = new ItemsForm(this.fb);
// 0 description 1 quantity 2 price
formstrarr: string[] = ['', '1', ''];
formstrarr2: string[] = ['', '1', ''];
formstrarr3: string[] = ['', '1', ''];
formstrarr4: string[] = ['', '1', ''];
formstrarr5: string[] = ['', '1', ''];

// End of  properties section

// *functionstart here
pushelementtoobj() {
// payload
const id = +this.route.snapshot.paramMap.get('id');

this.item = this.invoiceservice.GenerateItem(this.formstrarr);
this.invoicepayload.itemlists = this.invoiceservice.Generateitemincollection(
this.formstrarr, this.formstrarr2, this.formstrarr3, this.formstrarr4, this.formstrarr5
);
this.invoicepayload.customerid = id;
//console.log(this.invoicepayload);
//console.log(JSON.stringify(this.invoicepayload));
 // send payload to uri endpoint.
// if result true navigate to invoice detail page
this.invoiceservice.CreateInvoice(this.invoicepayload).subscribe(value => {
this.issucceedinfomation = value;
// if true  navigate to invoice detail
if (this.issucceedinfomation.issucceed) {
const url = `/admin/invoicedetail/${this.issucceedinfomation.detail}`;
this.router.navigate([url]);
}
});
}


Createinvoice() {
const id = +this.route.snapshot.paramMap.get('id');
this.invoicepayload.customerid = id;
// this.invoicepayload.itemlits = this.itemarr;
// for (let i = 0, len = this.itemarr.length; i < len; i++) {
// this.item.description = this.itemarr[i].description;
// this.item.price = this.itemarr[i].price;
// this.item.quantity = this.itemarr[i].quantity;
// this.invoicepayload.itemlits.push(this.item);
// }

// this.invoicepayload.itemlists = this.itemarr;
// console.log(this.invoicepayload.itemlists);
// console.warn(JSON.stringify(this.invoicepayload));
this.invoiceservice.CreateInvoice(this.invoicepayload).subscribe(value => {
this.issucceedinfomation = value;
if (this.issucceedinfomation.issucceed) {
this.router.navigate(['/admin/dashboard']);
}
});
}
// updateform() {
// this.itemform.Itemform01.patchValue({
// description: '111',
// price: '22.00',
// // *** second form
// Itemform02: {
// description: 'hello world',
// price: '2', // quantity: this.name
// }
// });
// }

// fetchcustomerinfo() {
// const id = +this.route.snapshot.paramMap.get('id');
// this.customerservice.Getcustomerdetailshort(id).subscribe();
// }
ngOnInit() {
// this.updateform();
  }

}
