import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { CustomerserviceService  } from '../../../services/customerservice.service';
import { Customerlist } from '../../../models/ResponseEntities';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

constructor(
private customerservice: CustomerserviceService
) { }
customerlist$: Observable<Customerlist[]>;
// properties section

private searchTerms = new Subject<string>();
searchcustomer(term: string) {
this.searchTerms.next(term);
}
  ngOnInit() {
this.customerlist$ = this.searchTerms.pipe(
debounceTime(300),
distinctUntilChanged(),
switchMap((term: string) => this.customerservice.Findcustomer(term)
)
);
}

}
