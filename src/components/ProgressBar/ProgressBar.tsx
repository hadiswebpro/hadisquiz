import styles from "./ProgressBar.module.css";
export default function ProgressBar({ current, total }: { current: number; total: number }) {
  return <div className={styles.track} role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total} aria-label="Quiz progress"><div className={styles.fill} style={{ width: `${(current / total) * 100}%` }} /></div>;
}
