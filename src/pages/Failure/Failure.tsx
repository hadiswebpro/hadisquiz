import type {Level,StageScore} from "../../types/quiz";
import {overallAccuracy,predictionDifference} from "../../game/engine/scoring";
import Button from "../../components/Button/Button";
import styles from "./Failure.module.css";
export default function Failure({level,scores,guess,onRestart}:{level:Level;scores:StageScore[];guess:number;onRestart:()=>void}){
 const last=scores[scores.length-1];const actual=overallAccuracy(scores);const difference=predictionDifference(guess,actual);
 return <section className={styles.failure}><span className={styles.icon}>{level.emoji}</span><p>YOUR JOURNEY ENDS IN {level.name}</p><h1>Some parts of me are still a mystery.</h1><div className={styles.stats}><p>Final level <strong>{level.name}</strong></p><p>Level score <strong>{last.correct}/{last.total}</strong></p><p>Level accuracy <strong>{Math.round(last.correct/last.total*100)}%</strong></p><p>Overall accuracy <strong>{actual}%</strong></p><p>Your prediction <strong>{guess}%</strong></p><p>Difference <strong>{difference>0?"+":""}{difference} percentage points</strong></p></div><Button onClick={onRestart}>TRY AGAIN ↺</Button></section>;
}
