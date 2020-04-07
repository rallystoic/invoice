import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder } from '@angular/forms';
import { CustomerPayload, CustomerForm } from '../../../models/RequestEntities';
import { IssucceedInfomation } from '../../../models/ResponseEntities';
import { CustomerserviceService  } from '../../../services/customerservice.service';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

constructor(
private fb: FormBuilder,
private customerservice: CustomerserviceService
) { }
// Properties
customerpayload = new CustomerPayload();
issucceedinfomation: IssucceedInfomation;
name: string;
custofm = new CustomerForm(this.fb);
// create customer form
// customerform = this.fb.group({
// first_name: [''],
// last_name: [''],
// phone: [''],
// address: [''],
// district: [''],
// province: [''],
// postal_code: [''],
// companyname: ['']
// });
// customer form
Createcustomer() {
this.customerpayload.first_name = this.custofm.customerform.get('first_name').value;
this.customerpayload.last_name = this.custofm.customerform.get('last_name').value;
this.customerpayload.phone = this.custofm.customerform.get('phone').value;
this.customerpayload.address = this.custofm.customerform.get('address').value;
this.customerpayload.district = this.custofm.customerform.get('district').value;
this.customerpayload.province = this.custofm.customerform.get('province').value;
this.customerpayload.postal_code = this.custofm.customerform.get('postal_code').value;
this.customerpayload.companyname = this.custofm.customerform.get('companyname').value;
console.log(this.customerpayload);
this.customerservice.Createcustomer(this.customerpayload).subscribe( value => {
this.issucceedinfomation = value;
console.log(this.issucceedinfomation);
if (this.issucceedinfomation.issucceed === true) {
window.location.reload();
}
});
}



  ngOnInit() {
  }

}
