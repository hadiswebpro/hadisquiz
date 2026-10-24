import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./Prediction.module.css";
export default function Prediction({
  onContinue,
}: {
  onContinue: (guess: number) => void;
}) {
  const [guess, setGuess] = useState(50);
  return (
    <section className={styles.prediction}>
      <h1>How well do you think you know me? 💭</h1>
      <output>{guess}%</output>
      <input
        type="range"
        min="0"
        max="100"
        value={guess}
        onChange={(e) => setGuess(Number(e.target.value))}
        aria-label="Your predicted score"
      />
      <Button onClick={() => onContinue(guess)}>BEGIN THE JOURNEY 🌸</Button>
    </section>
  );
}
