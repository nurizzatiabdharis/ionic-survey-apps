import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent implements OnInit {

  @Input() isEnd: boolean;
  @Input() currentQuestion: Question;
  @Output() nextQuestion = new EventEmitter<any>();

  ngOnInit() { }

  goToNextQuestion() {
    this.nextQuestion.emit();
  }

}
