import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private logo = require('../app/img/logo.png');
  model: any = {};

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  login() {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          sessionStorage.setItem('token', data.token);
          this.router.navigate(['/home/media']);
        },
        error => {
          console.log(error);
        });
  }
}
