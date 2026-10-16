export type LevelId = 1 | 2 | 3 | 4 | 5;
export type Question = { id: number; level: LevelId; prompt: string; emoji: string; options: [string, string, string, string]; correctIndex: 0 | 1 | 2 | 3 };
export type Level = { id: LevelId; name: string; emoji: string; required: number | null; rank: string; description: string };
export type StageScore = { level: LevelId; correct: number; total: number };
