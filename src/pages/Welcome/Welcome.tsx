import Button from "../../components/Button/Button";
import styles from "./Welcome.module.css";
export default function Welcome({ onStart }: { onStart: () => void }) { return <section className={styles.welcome}><p>🌿 BEFORE THE BLOOM</p><h1>HOW WELL DO YOU KNOW HADIS?</h1><p>Everyone knows a different version of me.</p><Button onClick={onStart}>ENTER MY WORLD ✨</Button></section>; }
