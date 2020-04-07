import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService} from '../../services/authenticationservice.service';
import { Router } from '@angular/router';
// import {} from '../../models/ResponseEntities'
import { FormBuilder} from '@angular/forms';
import { Userrequest} from '../../models/RequestEntities';
import { IssucceedInfomation} from '../../models/ResponseEntities';
import { environment} from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(
private authenticationservice: AuthenticationserviceService,
private router: Router,
private fb: FormBuilder,

) { }
// properties
issucceedinfomation: IssucceedInfomation;
authform = this.fb.group({
username: [''],
password: ['']
});
apiurl: string = environment.API_URL;
message: string;

// End properties

challenge() {
const userrequest = new Userrequest();
this.message = '';
const url = `${this.apiurl}`;
userrequest.username = this.authform.get('username').value;
userrequest.password = this.authform.get('password').value;
this.authenticationservice.Challenge(userrequest).subscribe(x => {
this.issucceedinfomation = x;
if (this.issucceedinfomation.issucceed) {
localStorage.setItem('token', this.issucceedinfomation.detail);
this.router.navigate(['/admin/createcustomer']);
} else if (this.issucceedinfomation.issucceed === false) {
this.message = this.issucceedinfomation.detail;
}
});

}
ngOnInit() {
}

}
