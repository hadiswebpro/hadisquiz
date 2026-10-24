import { useState } from "react";
import Welcome from "./pages/Welcome/Welcome";
import Prediction from "./pages/Prediction/Prediction";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import LevelIntro from "./levels/LevelIntro";
import Failure from "./pages/Failure/Failure";
import VoidEnding from "./pages/VoidEnding/VoidEnding";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import ThemeProvider from "./themes/ThemeProvider";
import { levelThemes } from "./themes/themeConfig";
import { levels } from "./data/levels";
import { questions } from "./data/questions";
import { selectLevelQuestions } from "./game/engine/questionSelector";
import { stageOutcome } from "./game/engine/progression";
import type { LevelId, Question, StageScore } from "./types/quiz";
import styles from "./App.module.css";

type Screen =
  | "welcome"
  | "prediction"
  | "levelIntro"
  | "quiz"
  | "failure"
  | "results"
  | "voidEnding";
export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [guess, setGuess] = useState(50);
  const [level, setLevel] = useState<LevelId>(1);
  const [round, setRound] = useState<Question[]>([]);
  const [scores, setScores] = useState<StageScore[]>([]);
  const [error, setError] = useState("");
  const currentLevel = levels[level - 1];
  function prepareLevel(id: LevelId) {
    setLevel(id);
    setRound([]);
    setError("");
    setScreen("levelIntro");
  }
  function startLevel() {
    try {
      setRound(selectLevelQuestions(questions, level));
      setError("");
      setScreen("quiz");
    } catch {
      setError(
        "We couldn't load the questions for this world. Please try again.",
      );
    }
  }
  function finish(correct: number) {
    setScores((prev) => [...prev, { level, correct, total: round.length }]);
    const outcome = stageOutcome(level, correct);
    if (outcome === "advance") {
      prepareLevel((level + 1) as LevelId);
    } else {
      setScreen(outcome);
    }
  }
  function restart() {
    setScores([]);
    setLevel(1);
    setRound([]);
    setGuess(50);
    setError("");
    setScreen("welcome");
  }
  const theme =
    screen === "welcome" || screen === "prediction"
      ? "intro"
      : levelThemes[level];
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <MusicPlayer theme={theme} />
        <main className={styles.main}>
          {screen === "welcome" && (
            <Welcome onStart={() => setScreen("prediction")} />
          )}
          {screen === "prediction" && (
            <Prediction
              onContinue={(value) => {
                setGuess(value);
                prepareLevel(1);
              }}
            />
          )}
          {error && (
            <p role="alert" className={styles.notice}>
              {error}
            </p>
          )}
          {screen === "levelIntro" && (
            <LevelIntro level={currentLevel} onContinue={startLevel} />
          )}
          {screen === "quiz" && round.length > 0 && (
            <Quiz
              key={level}
              level={currentLevel}
              questions={round}
              onFinish={finish}
            />
          )}
          {screen === "failure" && (
            <Failure
              level={currentLevel}
              scores={scores}
              guess={guess}
              onRestart={restart}
            />
          )}
          {screen === "results" && (
            <Results
              guess={guess}
              scores={scores}
              levels={levels}
              completed={false}
              onRestart={restart}
            />
          )}
          {screen === "voidEnding" && (
            <VoidEnding guess={guess} scores={scores} onRestart={restart} />
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}
