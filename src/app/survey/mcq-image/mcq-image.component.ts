import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from '../question';

@Component({
  selector: 'app-mcq-image',
  templateUrl: './mcq-image.component.html',
  styleUrls: ['./mcq-image.component.css'],
})
export class McqImageComponent implements OnInit {

  @Input() currentQuestion: Question;
  @Output() currentQuestionChange = new EventEmitter<any>();
  @Output() nextQuestion = new EventEmitter<any>();

  ngOnInit() { }

  clickAnswer(answer: Answer) {
    if (this.currentQuestion.isMultipleAnswer) {
      this.haveMultipleAnswer(answer);
    } else {
      this.haveOneAnswer(answer);
    }
  }

  haveOneAnswer(answer: Answer) {
    this.currentQuestion.answers.forEach((data: Answer) => {
      if (data.isSelected) {
        data.isSelected = false;
      }
    });
    answer.isSelected = !answer.isSelected;
    this.currentQuestionChange.emit(this.currentQuestion);
    this.nextQuestion.emit();
  }

  haveMultipleAnswer(answer: Answer) {
    answer.isSelected = !answer.isSelected;
    this.currentQuestion.isDisableButton = false;
    if (!this.currentQuestion.answers.some((ans: Answer) => ans.isSelected)) {
      this.currentQuestion.isDisableButton = true;
    }
    this.currentQuestionChange.emit(this.currentQuestion);
  }


}
