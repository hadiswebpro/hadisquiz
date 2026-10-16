# How Well Do You Know Hadis? 🌸🖤

A five-world React + TypeScript quiz: **BLOOM → ECHO → VEIL → ABYSS → VOID**.

## Run locally

```bash
npm install
npm run dev
```

This is the initial runnable UI scaffold. Question banks are intentionally empty until the 100 original answers are reviewed and converted into accurate multiple-choice questions. Music and artwork are placeholders. No answer keys are displayed to players.

## Structure

- `src/pages`: Welcome, Prediction, Quiz, Results
- `src/components`: shared Button, ProgressBar, MusicPlayer
- `src/features/quiz`: QuestionCard, LevelTransition, quiz logic
- `src/data`: world configuration and questions
- `src/types`: shared types
- `src/styles`: global styles and animation

Pass requirements: BLOOM 8/10, ECHO 8/10, VEIL 9/10, ABYSS 10/10. Each attempt draws 10 random questions from a 20-question bank per world. Failing ends the run; replay starts from the beginning. The final VOID world ends with a result. Frontend-only answer keys are inspectable through browser developer tools.
