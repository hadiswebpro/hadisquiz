import type {StageScore} from "../../types/quiz";
import {overallAccuracy,predictionDifference} from "../../game/engine/scoring";
import Button from "../../components/Button/Button";
import styles from "./VoidEnding.module.css";
export default function VoidEnding({guess,scores,onRestart}:{guess:number;scores:StageScore[];onRestart:()=>void}){
 const actual=overallAccuracy(scores);const difference=predictionDifference(guess,actual);
 return <div className={styles.finalScene}>
   <div className={styles.darkness} aria-hidden="true"/>
   <section className={styles.ending}>
     <span className={styles.spark} aria-hidden="true">✧</span>
     <p className={styles.eyebrow}>THE FINAL SECRET</p>
     <h1>THE ONE WHO KNOWS</h1>
     <p>You didn't just reach the end. You saw the parts of me that most people never get to see.</p>
     <p>And somehow, you stayed.</p>
     <p className={styles.letter}>You are probably my everything. Just know that I value you more than anyone in my life, and I will always try to make you happy, my darling. You make this void a bit warmer, a bit lighter, and easier to live with. So thank you for being mine.</p>
     <div className={styles.score}>Your score: {actual}% · Your guess: {guess}% · Difference: {difference>0?"+":""}{difference} points</div>
     <Button onClick={onRestart}>BEGIN AGAIN ↺</Button>
   </section>
 </div>;
}