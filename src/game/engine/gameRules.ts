import type { LevelId } from "../../types/quiz";
export const gameRules: Record<LevelId,{questionCount:number;requiredCorrect:number|null}> = {
  1:{questionCount:10,requiredCorrect:8},
  2:{questionCount:10,requiredCorrect:8},
  3:{questionCount:10,requiredCorrect:9},
  4:{questionCount:10,requiredCorrect:10},
  5:{questionCount:10,requiredCorrect:null},
};
export const perfectVoidScore = 10;
