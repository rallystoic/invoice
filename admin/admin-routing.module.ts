import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component pages
import { AdminComponent } from './admin.component';
import { InvoicedetailComponent } from './components/invoicedetail/invoicedetail.component';
import { LoginComponent } from './components/login/login.component';
// navlayout
import { AdminnavComponent} from './components/layout/adminnav/adminnav.component';
import { CreatecustomerComponent} from './components/customer/createcustomer/createcustomer.component';
import { SearchcustomerComponent } from './components/customer/searchcustomer/searchcustomer.component';
import { CreateinvoiceComponent } from './components/createinvoice/createinvoice.component';
import { InvoicesComponent} from './components/invoices/invoices.component';

// guard
import { AdminGuard} from './authguard/admin.guard';
const routes: Routes = [
{
path: '',
component: AdminnavComponent,
canActivateChild: [AdminGuard],
children: [
{ path: '', redirectTo: 'createcustomer', pathMatch: 'full'},
{ path: 'proto', component: AdminComponent },
{ path: 'createcustomer', component: CreatecustomerComponent },
{ path: 'searchcustomer', component: SearchcustomerComponent },
{ path: 'createinvoice/customer/:id', component: CreateinvoiceComponent },
{ path: 'invoicelist', component: InvoicesComponent }
]
},
// route to invoice detail
{path: 'invoicedetail/:id', component: InvoicedetailComponent, canActivate: [AdminGuard]},
{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
