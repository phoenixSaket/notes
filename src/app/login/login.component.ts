import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any = {};

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  login(event: any) {
    event.preventDefault();
    let members = this.dataService.getFromLocalStorage("loginDetails");
    console.log(members);
    console.log(this.data);
    members.forEach((member: any) => {
      if (member.username = this.data.username && member.password == this.data.password) {
        this.router.navigate(["/notes"]);
      } else {

      }
    })
  }

  createNewAccount(event: any) {
    event.preventDefault();
    this.router.navigate(["/create-new-account"]);
  }

  loginAsGuest(event: any) {
    event.preventDefault();
    this.router.navigate(["/notes"]);
  }

  inputChanged(event: any, type: string) {
    const value = event.target.value;

    switch (type) {
      case "username":
        this.data.username = value;
        break;
      case "password":
        this.data.password = btoa(value);
        break;
      default:
        break;
    }
  }

}
