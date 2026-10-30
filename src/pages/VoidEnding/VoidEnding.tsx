import { useState } from "react";
import type { FormEvent } from "react";
import type { StageScore } from "../../types/quiz";
import { overallAccuracy, predictionDifference } from "../../game/engine/scoring";
import Button from "../../components/Button/Button";
import { levels } from "../../data/levels";
import styles from "./VoidEnding.module.css";

const SECRET = "you are mine my violet void";

export default function VoidEnding({ guess, scores, onRestart }: { guess: number; scores: StageScore[]; onRestart: () => void }) {
  const [password, setPassword] = useState("");
  const [ending, setEnding] = useState<"locked" | "private" | "public">("locked");
  const actual = overallAccuracy(scores);
  const difference = predictionDifference(guess, actual);
  const rank = levels[levels.length - 1].rank;

  function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnding(password.trim().toLowerCase().replace(/\s+/g, " ") === SECRET ? "private" : "public");
  }

  return (
    <div className={`${styles.finalScene} ${ending === "private" ? styles.privateScene : styles.starScene}`}>
      <div className={styles.darkness} aria-hidden="true" />
      {ending === "locked" ? (
        <section className={styles.passwordCard}>
          <span className={styles.spark} aria-hidden="true">✧</span>
          <h1>ONE LAST SECRET</h1>
          <p>Enter the secret phrase to reveal the final message.</p>
          <form className={styles.passwordForm} onSubmit={unlock}>
            <label htmlFor="void-password">Secret phrase</label>
            <input id="void-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="off" required />
            <Button type="submit">REVEAL THE ENDING ✧</Button>
          </form>
        </section>
      ) : ending === "private" ? (
        <section className={styles.ending}>
          <span className={styles.spark} aria-hidden="true">✧</span>
          <p className={styles.eyebrow}>THE FINAL SECRET</p>
          <h1>THE ONE WHO KNOWS</h1>
          <p>You didn't just reach the end. You saw the parts of me that most people never get to see.</p>
          <p>And somehow, you stayed.</p>
          <p className={styles.letter}>You are probably my everything. Just know that I value you more than anyone in my life, and I will always try to make you happy, my darling. You make this void a bit warmer, a bit lighter, and easier to live with. So thank you for being mine.</p>
          <div className={styles.score}>Your rank: {rank} · Your score: {actual}% · Your guess: {guess}% · Difference: {difference > 0 ? "+" : ""}{difference} points</div>
          <Button onClick={onRestart}>BEGIN AGAIN ↺</Button>
        </section>
      ) : (
        <section className={styles.ending}>
          <span className={styles.spark} aria-hidden="true">✧</span>
          <h1>VOID COMPLETE</h1>
          <p>You reached here. You know me pretty well, and you are honored for reaching here. Thank you.</p>
          <p className={styles.score}>Your rank: {rank} · Your score: {actual}%</p>
          <Button onClick={onRestart}>BEGIN AGAIN ↺</Button>
        </section>
      )}
    </div>
  );
}
