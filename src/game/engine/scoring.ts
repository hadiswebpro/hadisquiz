import type {StageScore} from "../../types/quiz";
export function overallAccuracy(scores:StageScore[]):number{
 const total=scores.reduce((sum,s)=>sum+s.total,0);
 return total?Math.round(scores.reduce((sum,s)=>sum+s.correct,0)*100/total):0;
}
export function predictionDifference(prediction:number,actual:number):number{return actual-prediction;}
