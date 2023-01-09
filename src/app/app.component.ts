import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includeLatters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  // length: string = '';

  constructor() {

  }

  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+';
    let validChar = '';
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeLatters) {
      validChar += letters;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }

    let generatedPassword = '';
    for (let index = 0; index < this.length; index++) {
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  onChangeLatter() {
    this.includeLatters = !this.includeLatters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  // onChangeLength(event: Event) {
  //   this.length= (event.target as HTMLInputElement).value;
  // }
}
