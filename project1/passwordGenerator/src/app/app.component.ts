import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password ='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;

   onChangePasswordLength(value: string){
     const parsedValue = parseInt(value);
     if (!isNaN(parsedValue)){
        this.passwordLength = parsedValue;
     }
   }

   onChangeIncludeLetters(){
    this.includeLetters = !this.includeLetters;
   }

   onChangeIncludeNumbers(){
     this.includeNumbers = !this.includeNumbers;
   }

   onChangeIncludeSymbols(){
    this.includeSymbols = !this.includeSymbols;
   }

  onButtonClick(){
     const numbers = '1234567890';
     const letters = 'abcdefghijklmnopqrstuvwxyz';
     const symbols = '!@#$%^&*()';
     let validChars = '';
     if (this.includeLetters){
       validChars += letters;
     }
     if (this.includeNumbers){
      validChars += numbers;
     }
     if (this.includeSymbols){
       validChars += symbols;
     }

     let generatedPassword ='';
     for(let i=0; i< this.passwordLength; i++){
           const index = Math.floor(Math.random() * validChars.length);
           generatedPassword += validChars[index];
     }

     this.password = generatedPassword;

  }
}
