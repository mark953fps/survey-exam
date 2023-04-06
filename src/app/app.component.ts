import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { Survey } from './survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public surveyData: Survey[] = [];
  public surveyForm: FormGroup;
  public survey: FormArray<any> = new FormArray<any>([]);
  public questions: FormArray<any> = new FormArray<any>([]);

  constructor(private fb: FormBuilder, private appService: AppService) {}

  public ngOnInit(): void {
    this.surveyForm = this.fb.group({
      survey: this.fb.array([]),
    });

    this.appService.getSurveyList().subscribe({
      next: (result) => {
        
        if (result && result.length) {
          this.surveyData = result;

          result.forEach((data, i) => {
            this.addSurveyForm(data);
            data.questions.forEach((q) => this.addQuestionsForm(q, i));
          });
        }
      },
    });
  }

  public addSurveyForm(data: any): void {
    this.survey = this.surveyForm.get('survey') as FormArray;
    this.survey.push(this.createSurveyForm(data));
  }

  public createSurveyForm(data): FormGroup {
    return this.fb.group({
      surveyId: [data.surveyId],
      title: [data.title],
      numberOfQuestions: [data.numberofquestions],
      questions: this.fb.array([]),
    });
  }

  public addQuestionsForm(q: any, i: number): void {
    this.questions = this.surveyForm.controls['survey']['controls'][i].get('questions') as FormArray;
    this.questions.push(this.createQuestionsForm(q));
  }

  public createQuestionsForm(q): FormGroup {
    return this.fb.group({
      id: [q.id],
      title: [q.title],
      answertypeid: [q.answertypeid ? q.answertypeid : '', Validators.required],
      answeroptions: [q.answeroptions],
    });
  }

  public selectAnswer(event: any, firstIndex: number, secondIndex: number) {
    this.surveyForm.controls['survey']['controls'][firstIndex].controls['questions']['controls'][secondIndex].controls.answertypeid.setValue(event);
  }

  public submit(): void {
    console.log(this.appService.postSurvey(this.surveyForm.value), 'submit');
  }
}
