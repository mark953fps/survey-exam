export interface Survey {
    surveyId: Number;
    title: String;
    numberofquestions: Number;
    questions: QuestionsList;
}

export interface Questions {
    id: Number;
    title: String;
    answertypeid?: Number;
    answeroptions: AnsweroptionsList
}

export interface QuestionsList extends Array<Questions> {}

export interface Answeroptions {
    id: Number;
    answer: String;
}

export interface AnsweroptionsList extends Array<Answeroptions> {}
