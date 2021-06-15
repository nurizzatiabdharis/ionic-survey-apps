import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {

  @Input() index: number;
  @Input() totalQuestion: number;
  @Output() previousQuestion = new EventEmitter<any>();

  ngOnInit() { }

  progress(): string {
    return (((this.index + 1) / this.totalQuestion) * 100).toString() + '%';
  }

  goToPreviousQuestion() {
    this.previousQuestion.emit();
  }

}
