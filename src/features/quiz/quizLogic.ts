import type { Question, LevelId, StageScore } from "../../types/quiz";

export function drawQuestions(
  bank: Question[],
  level: LevelId,
  count = 10,
): Question[] {
  const pool = bank.filter((q) => q.level === level);
  if (pool.length < count)
    throw new Error(`Level ${level} needs at least ${count} questions.`);
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export function totalPercentage(scores: StageScore[]): number {
  const total = scores.reduce((sum, stage) => sum + stage.total, 0);
  const correct = scores.reduce((sum, stage) => sum + stage.correct, 0);
  return total ? Math.round((correct / total) * 100) : 0;
}
