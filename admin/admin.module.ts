import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//httpmodule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material angular
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminnavComponent } from './components/layout/adminnav/adminnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InvoicedetailComponent } from './components/invoicedetail/invoicedetail.component';
import { MatInputModule} from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator'; 


// Page
import { LoginComponent } from './components/login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CreatecustomerComponent } from './components/customer/createcustomer/createcustomer.component';
import { CustomerdetailComponent } from './components/customer/customerdetail/customerdetail.component';
import { SearchcustomerComponent } from './components/customer/searchcustomer/searchcustomer.component';
import { CreateinvoiceComponent } from './components/createinvoice/createinvoice.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

@NgModule({
declarations: [AdminComponent, AdminnavComponent, InvoicedetailComponent,
LoginComponent,
CreatecustomerComponent,
CustomerdetailComponent,
SearchcustomerComponent,
CreateinvoiceComponent,
InvoicesComponent],
  imports: [
CommonModule,
AdminRoutingModule,
LayoutModule,
MatToolbarModule,
MatButtonModule,
MatSidenavModule,
MatIconModule,
MatListModule,
HttpClientModule,
MatInputModule,
MatGridListModule,
MatCardModule,
MatMenuModule,
FormsModule,
ReactiveFormsModule,
MatExpansionModule,
MatPaginatorModule
  ],
providers: [
HttpClientModule,
]
})
export class AdminModule { }
