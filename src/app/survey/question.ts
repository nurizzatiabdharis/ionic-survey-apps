export class Question {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  selectLabel?: string;
  selectType?: string;
  answers?: Answer[];
  columns?: Columns[];
  inputs?: Inputs[];
  isMultipleAnswer: boolean;
  isShowButton = true;
  isDisableButton = true;
  nbMinCheck = 0;

  Question() { }
}

export class Inputs {
  id: number;
  label: string;
  inputmode: string;
  formControlName: string;
  placeholder: string;
  rules: Rules[];

  Inputs() { }
}

export class Answer {
  id: number;
  label: string;
  isSelected?: boolean;
  isChecked?: boolean;
  image?: string;
  inputLabel?: string;
  isRequired?: boolean;

  Answer() { }
}

export class Rules {
  type: string;
  message: string;
  pattern?: string;
  length?: number;

  Rules() { }
}

export class Columns {
  name: string;
  options: Options[];
  selectedIndex?: number;
  cssClass?: string;
  columnWidth?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  roundOff?: number;

  Columns() { }
}

export class Options {
  text: string;
  value: string;
}

