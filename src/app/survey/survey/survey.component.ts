import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {

  @Input() questions: Question[];
  currentQuestion: Question;
  index = 0;
  totalQuestion: number;
  isEnd = false;

  ngOnInit() {
    this.totalQuestion = this.questions.length;
    this.currentQuestion = this.questions[this.index];
  }

  goToNextQuestion() {
    if (this.index < this.questions.length - 1) {
      this.index++;
      this.currentQuestion = this.questions[this.index];
    } else {
      this.isEnd = true;
    }
  }

  goToPreviousQuestion() {
    if (this.index !== 0) {
      this.index--;
      this.currentQuestion = this.questions[this.index];
    }
  }

}
