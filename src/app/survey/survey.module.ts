import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SurveyComponent } from './survey/survey.component';
import { McqComponent } from './mcq/mcq.component';
import { McqImageComponent } from './mcq-image/mcq-image.component';

// import all components
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { FieldsComponent } from './fields/fields.component';
import { EndSurveyComponent } from './end-survey/end-survey.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // declare all components here
    SurveyComponent,
    McqComponent,
    McqImageComponent,
    EndSurveyComponent,
    CheckboxComponent,
    ProgressBarComponent,
    NavButtonComponent,
    FieldsComponent,
  ],
  exports: [
    SurveyComponent
  ]
})
export class SurveyModule { }
