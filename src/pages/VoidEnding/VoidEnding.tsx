import type {StageScore} from "../../types/quiz";
import {overallAccuracy,predictionDifference} from "../../game/engine/scoring";
import Button from "../../components/Button/Button";
import styles from "./VoidEnding.module.css";
export default function VoidEnding({guess,scores,onRestart}:{guess:number;scores:StageScore[];onRestart:()=>void}){
 const actual=overallAccuracy(scores);const difference=predictionDifference(guess,actual);
 return <section className={styles.ending}><div className={styles.orbit} aria-hidden="true">✧</div><p>🖤 THE FINAL SECRET</p><h1>THE ONE WHO KNOWS</h1><p>You didn't just reach the end. You saw the parts of me that most people never get to see.</p><p>And somehow, you stayed.</p><div className={styles.score}>Your score: {actual}% · Your guess: {guess}% · Difference: {difference>0?"+":""}{difference} points</div><Button onClick={onRestart}>BEGIN AGAIN ↺</Button></section>;
}
