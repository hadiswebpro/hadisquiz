import type { LevelId,Question } from "../../types/quiz";
import { drawQuestions } from "../../features/quiz/quizLogic";
import { gameRules } from "./gameRules";
export function selectLevelQuestions(bank:Question[],level:LevelId):Question[]{
  return drawQuestions(bank,level,gameRules[level].questionCount);
}
