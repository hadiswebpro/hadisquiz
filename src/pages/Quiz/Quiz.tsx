import {useState} from "react";
import type {Question,Level} from "../../types/quiz";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Button from "../../components/Button/Button";
import QuestionCard from "../../features/quiz/QuestionCard/QuestionCard";
import styles from "./Quiz.module.css";
export default function Quiz({level,questions,onFinish}:{level:Level;questions:Question[];onFinish:(correct:number)=>void}){
 const [index,setIndex]=useState(0);
 const [selected,setSelected]=useState<number|null>(null);
 const [answers,setAnswers]=useState<number[]>([]);
 function next(){
  if(selected===null)return;
  const updated=[...answers,selected];
  if(index===questions.length-1){
   onFinish(updated.filter((choice,i)=>choice===questions[i].correctIndex).length);
   return;
  }
  setAnswers(updated);setIndex(index+1);setSelected(null);
 }
 return <section className={styles.quiz}><header><p>{level.emoji} {level.name} · QUESTION {index+1}/{questions.length}</p><ProgressBar current={index+1} total={questions.length}/></header><QuestionCard question={questions[index]} selected={selected} onSelect={setSelected}/><Button disabled={selected===null} onClick={next}>{index===questions.length-1?"FINISH LEVEL":"NEXT QUESTION →"}</Button></section>;
}
