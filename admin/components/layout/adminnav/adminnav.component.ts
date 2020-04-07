import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationserviceService} from '../../../services/authenticationservice.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

constructor(
private breakpointObserver: BreakpointObserver,
private authservice: AuthenticationserviceService,
private router: Router
) {}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

loginbtn$ = new BehaviorSubject<boolean>(true);
logoutbtn$ = new BehaviorSubject<boolean>(false);
logout() {
window.localStorage.clear();
this.router.navigate(['/admin/login']);
}

IsAuthenticated() {
}

ngOnInit() {

}
}

