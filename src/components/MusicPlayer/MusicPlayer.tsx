import { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";
export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  async function toggle() {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); return; }
    try { await ref.current.play(); setPlaying(true); } catch { setPlaying(false); }
  }
  return <div className={styles.player}><audio ref={ref} loop src={`${import.meta.env.BASE_URL}audio/theme.mp3`} onEnded={() => setPlaying(false)} /><button onClick={toggle} aria-label={playing ? "Mute music" : "Play music"}>{playing ? "🔊" : "🔇"}</button></div>;
}
