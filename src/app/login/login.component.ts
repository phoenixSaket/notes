import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(["/notes"]);
  }

  createNewAccount(event: any) {
    event.stopPropagation();
    this.router.navigate(["/create-new-account"]);
  }

  loginAsGuest(event: any) {
    event.stopPropagation();
    this.router.navigate(["/notes"]);
  }

}
