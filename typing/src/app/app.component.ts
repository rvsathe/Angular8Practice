import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomSentence =lorem.sentence();
  isCorrect = false;
  enteredText ='';

  onInput(value:string){
    this.enteredText =  value;
    if(value === this.randomSentence){
      this.isCorrect = true;
    }else{
      this.isCorrect=false;
    }
  }

  compareLetters(generatedLetter:string,enteredLetter : string){
     if(!enteredLetter){
        return 'pending';
     }

     return generatedLetter === enteredLetter ? 'correct' : 'incorrect';
  }


}
