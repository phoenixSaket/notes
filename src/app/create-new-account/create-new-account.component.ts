import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  public data: any = { username: "", password: "" };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    let loginData = { username: this.data.username, password: this.data.password };
    this.dataService.addToLocalStorage("loginDetails", loginData);
  }

  cancel(event: any) {
    event.preventDefault();
    this.router.navigate(["/"]);
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
