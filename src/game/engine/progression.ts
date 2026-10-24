import type {LevelId} from "../../types/quiz";
import {gameRules,perfectVoidScore} from "./gameRules";
export type StageOutcome="advance"|"failure"|"results"|"voidEnding";
export function stageOutcome(level:LevelId,correct:number):StageOutcome{
 if(level===5)return correct===perfectVoidScore?"voidEnding":"results";
 const required=gameRules[level].requiredCorrect;
 return required!==null&&correct>=required?"advance":"failure";
}
