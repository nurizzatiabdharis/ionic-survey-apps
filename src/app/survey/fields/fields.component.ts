import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Rules, Inputs } from '../question';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent implements OnInit {

  @Input() currentQuestion: Question;
  @Output() currentQuestionChange = new EventEmitter<any>();

  myFormGroup: FormGroup;
  inputData: Inputs[] = [];
  formMessageErrors = {};

  constructor() { }

  ngOnInit() {
    const group = {};
    this.inputData = this.currentQuestion.inputs;
    this.inputData.forEach((input: Inputs) => {
      group[input.label] = new FormControl('', this.checkValidator(input));
      this.formMessageErrors[input.label] = input.rules;
    });
    this.myFormGroup = new FormGroup(group);
  }

  checkValidator(input: { rules: Rules[]; }): any[] {
    const tabValidator = [];
    input.rules.forEach(rule => {
      switch (rule.type) {
        case 'required':
          tabValidator.push(Validators.required);
          break;
        case 'maxlength':
          tabValidator.push(Validators.maxLength(rule.length));
          break;
        case 'pattern':
          tabValidator.push(Validators.pattern(rule.pattern));
          break;
      }
    });
    return tabValidator;
  }

  onSubmit() {
    console.log(this.myFormGroup.value);
  }

  checkFocus() {
    this.currentQuestion.isShowButton = false;
    this.currentQuestionChange.emit(this.currentQuestion);
  }

  checkBlur() {
    this.currentQuestion.isShowButton = true;
    this.currentQuestionChange.emit(this.currentQuestion);
  }

}
