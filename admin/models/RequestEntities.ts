
import { FormBuilder } from '@angular/forms';
// RequestEntities 
// Payload class for post or put method

// customer payload
export class CustomerPayload {
first_name: string;
last_name: string;
phone: string;
address: string;
district: string;
province: string;
postal_code: string;
companyname: string;
}

// customer edit payload
export class CustomerEditPayload {
customerid: number;
first_name: string;
last_name: string;
phone: string;
address: string;
district: string;
province: string;
postal_code: string;
companyname: string;
}


// class from for customerform
export class CustomerForm {
constructor(
private fb: FormBuilder
){}
customerform = this.fb.group({
first_name: [''],
last_name: [''],
phone: [''],
address: [''],
district: [''],
province: [''],
postal_code: [''],
companyname: ['']
});
}

// class for invoice form
export class ItemsForm {
constructor(private fb: FormBuilder)
{}
Itemform01 = this.fb.group({
description: [''],
quantity: [''],
price: [''],
Itemform02: this.fb.group({
description: [''],
quantity: [''],
price: [''],
Itemform03: this.fb.group({
description: [''],
quantity: [''],
price: [''],
Itemform04: this.fb.group({
description: [''],
quantity: [''],
price: [''],
Itemform05: this.fb.group({
description: [''],
quantity: [''],
price: [''],
})
})
})
})
});
}



export class Iitemlist {
description: string;
quantity: string;
price: string;
}

// class for creating an invoice
// sending a collection of items list

export class InvoicePayload {
constructor( ) {
}
itemlists: Iitemlist[];
customerid: number;
}


export class Userrequest{
username: string;
password: string;
}
