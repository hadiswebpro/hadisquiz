import styles from "./ProgressBar.module.css";
export default function ProgressBar({current,total}:{current:number;total:number}){
 const progress=total>0?Math.min(100,Math.max(0,current/total*100)):0;
 return <div className={styles.track} role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total} aria-label="Quiz progress"><div className={styles.fill} style={{width:`${progress}%`,backgroundColor:"var(--progress)"}}/></div>;
}
