import type {Level} from "../types/quiz";
import {levelIntroductions} from "./levelConfig";
import Button from "../components/Button/Button";
import styles from "./LevelIntro.module.css";
export default function LevelIntro({level,onContinue}:{level:Level;onContinue:()=>void}){
 const info=levelIntroductions[level.id];
 return <section className={`${styles.intro} ${styles[`world${level.id}`]}`}><span className={styles.symbol}>{level.emoji}</span><p>WORLD {level.id} OF 5</p><h1>{info.heading}</h1><p>{info.body}</p><p className={styles.rule}>{level.required===null?"The final world awaits.":`Pass with at least ${level.required} correct answers out of 10.`}</p><Button onClick={onContinue}>ENTER {level.name} →</Button></section>;
}