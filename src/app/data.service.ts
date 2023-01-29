import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }

  isStringEmptyOrNull(key: string) {
    return key.length > 0;
  }

  addToLocalStorage(key: string, value: any) {
    let previous = JSON.parse(this.getFromLocalStorage(key) || "[]");
    let isAlreadyPresent: boolean = false;
    previous.forEach((el: any) => {
      if (el.username == value.username) {
        isAlreadyPresent = true;
        console.log(el)
      }
    })
    if (!isAlreadyPresent || previous.length == 0) {
      previous.push(value);
    }

    this.saveToLocalStorage(key, previous);
  }
}
