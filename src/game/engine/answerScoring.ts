import type {Question} from "../../types/quiz";
export function countCorrectAnswers(questions:Question[],answers:number[]):number{
 return answers.reduce((correct,answer,index)=>correct+(answer===questions[index]?.correctIndex?1:0),0);
}
