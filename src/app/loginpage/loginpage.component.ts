import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AdminLayoutComponent} from 'src/app/layouts/admin-layout/admin-layout.component';
import {LoginService} from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  FormError: string;
  isLoggedin: boolean;
  tempData: string;
  username: string;
  password: string;

  // tslint:disable-next-line:no-shadowed-variable
  private bcrypt: any;
  // tslint:disable-next-line:no-shadowed-variable
  private submitted: string;
  constructor(public httpClient: HttpClient,
              private route: Router,
              private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
     this.checklogin();

  }

  private checklogin() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedin = true;
      this.route.navigate(['/']);

    } else {
      this.isLoggedin = false;
      this.route.navigate(['/']);

    }
  }

showText() {
    if (this.username === '' || this.password === '') {
      return;
    }
 // debugger;
    const userObject = {};
    const storageObject = {};
  // const pass = this.bcrypt.hashSync(Password);

    userObject[0] = this.username;
    userObject[1] = this.password;

  // const pass = this.bcrypt.hashSync(this.password);
    storageObject[0] = this.username;
    storageObject[1] = this.password;

  // tslint:disable-next-line:triple-equals
    if (this.username === '') {
    this.FormError = 'Please Enter Username';
  } else if (this.password === '') {
    this.FormError = 'Please Enter Password';
  } else {

    const isValid = this.httpClient.post<any>('http://172.16.223.23:5000/login', userObject).subscribe(data => {
      const tempData = data;
      // tslint:disable-next-line:no-debugger
      debugger;
      if (tempData.message === 'Login Succeeded!') {
        this.route.navigate(['/dashboard']);
        this.loginService.isloggedIn = true;
        const user = JSON.stringify(storageObject);
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        this.FormError = 'Username or Password is wrong';
      }
    });

  }

}

// logout() {
//   // remove user from local storage to log user out
//   localStorage.removeItem('currentUser');
// }
//   onsubmit() {
//     this.submitted = 'false';
//   }
}
class Post {
  constructor(
    public pass: string
  ) { }
}
