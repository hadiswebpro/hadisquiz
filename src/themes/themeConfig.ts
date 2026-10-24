import type {LevelId} from "../types/quiz";
export type ThemeName="intro"|"bloom"|"echo"|"veil"|"abyss"|"void";
export const levelThemes:Record<LevelId,ThemeName>={1:"bloom",2:"echo",3:"veil",4:"abyss",5:"void"};
