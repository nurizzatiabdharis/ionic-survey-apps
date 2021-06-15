import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from '../question';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {

  @Input() currentQuestion: Question;
  @Output() currentQuestionChange = new EventEmitter<any>();

  ngOnInit() { }

  private hasEnoughAnswers() {
    const nbCheckedAnswers = this.currentQuestion.answers.filter((ans: Answer) => ans.isChecked).length;
    return nbCheckedAnswers >= this.currentQuestion.nbMinCheck;
  }

  private hasRequiredNotChecked() {
    return this.currentQuestion.answers.some((ans: Answer) => ans.isRequired && !ans.isChecked);
  }

  onChange() {
    this.currentQuestion.isDisableButton = false;
    if (!this.hasEnoughAnswers() || this.hasRequiredNotChecked()) {
      this.currentQuestion.isDisableButton = true;
    }
    this.currentQuestionChange.emit(this.currentQuestion);
  }
}
