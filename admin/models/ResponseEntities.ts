export class IssucceedInfomation {
issucceed: boolean;
detail: string;
}


export class Customerlist {
customerid: number;
fullname: string;
phonenumber: string;
}
export class Rsitem {
description: string;
quantity: string;
price: string;
}

// c stand for seller,dealer,companyname
// and below compay is client's bill information
export class Rsinvoice{
invoiceid: string;
date: string;
c_companyname: string;
c_address: string;
c_district:string;
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
totalinthaiword: string;
}


export class RsInvoices {
id: string;
invoiceid: string;
amount: string;
date: string;

}


export class Total {
total: number;
}
