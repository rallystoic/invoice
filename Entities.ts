// payload
export class Items {
itemname: string;
description: string;
quantity: number;
orderid: number;
}


// responseBlueprint
//
//
export class Rsinvoice {
invoiceid: number;
date: string;
c_companyname: string;
c_address: string;
c_district: string;
c_province: string;
c_postal_code: string;
fullname: string;
phone: string;
address: string;
district: string;
province: string;
postal_code: string;
companyname: string;
rsitems: Rsitem[];
total: string;
}

export class Rsitem {
description: string;
quantity: string;
price: string;
}

export class Rcustomer {
customerid: number;
fullname: string;
phonenumber: string;
}




