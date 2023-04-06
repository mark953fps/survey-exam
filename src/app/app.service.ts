import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public getSurveyList(): Observable<any> {
    return of([
      {
        surveyId: 1,
        title: 'title 1',
        numberofquestions: 3,
        questions: [
          {
            id: 1,
            title: 'question 1',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
          {
            id: 2,
            title: 'question 2',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
          {
            id: 3,
            title: 'question 3',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
        ],
      },
      {
        surveyId: 2,
        title: 'title 2',
        numberofquestions: 3,
        questions: [
          {
            id: 1,
            title: 'question 1',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
          {
            id: 2,
            title: 'question 2',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
          {
            id: 3,
            title: 'question 3',
            answertypeid: null,
            answeroptions: [
              {
                id: 1,
                answer: 'answer 1',
              },
              {
                id: 2,
                answer: 'answer 2',
              },
              {
                id: 3,
                answer: 'answer 3',
              },
            ],
          },
        ],
      },
    ]);
  }

  public postSurvey(data): Observable<any> {
    return data;
  }
}
