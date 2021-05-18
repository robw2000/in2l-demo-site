import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId: string = 'user99';
  password: string;
  errorMsg: string;
  dataSource: any;

  constructor(private authApiService: AuthApiService, private route: ActivatedRoute, private router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
    this.errorMsg = null;
  }

  onSubmit(f: NgForm) {
    this.errorMsg = f.valid ? null : 'Username and Password are required fields';
    if (f.valid) {
      this.authApiService.getToken(f.value).subscribe(token => {
        this.cookies.set('in2l-demo-token', token);
        this.router.navigate([this.route.snapshot.paramMap.get('returnUrl')]);
      },
      (error:HttpErrorResponse) => {
        if (error.status === 403) {
          this.errorMsg = "Username or Password is incorrect";
        } else {
          this.errorMsg = "Unknown error. Please try again";
        }
      });
    }
  }

}
