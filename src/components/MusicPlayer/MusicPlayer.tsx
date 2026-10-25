import { useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";
import type { ThemeName } from "../../themes/themeConfig";

const tracks: Record<ThemeName, string> = {
  intro: "Intro",
  bloom: "Bloom",
  echo: "Echo",
  veil: "Veil",
  abyss: "Abyss",
  void: "Void",
};

export default function MusicPlayer({ theme = "intro" }: { theme?: ThemeName }) {
  const ref = useRef<HTMLAudioElement>(null);
  const wantsMusic = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.pause();
    audio.src = `${import.meta.env.BASE_URL}audio/${tracks[theme]}.mp3`;
    audio.load();
    setPlaying(false);
    setBlocked(false);

    // Only resume automatically after the user has explicitly enabled music.
    if (wantsMusic.current) {
      void audio.play().then(() => setPlaying(true)).catch(() => setBlocked(true));
    }
  }, [theme]);

  async function toggle() {
    const audio = ref.current;
    if (!audio) return;

    if (wantsMusic.current) {
      wantsMusic.current = false;
      audio.pause();
      setPlaying(false);
      setBlocked(false);
      return;
    }

    wantsMusic.current = true;
    try {
      await audio.play();
      setPlaying(true);
      setBlocked(false);
    } catch {
      setPlaying(false);
      setBlocked(true);
    }
  }

  return (
    <div className={styles.player}>
      <audio
        ref={ref}
        loop
        preload="auto"
        onPause={() => setPlaying(false)}
        onPlay={() => { setPlaying(true); setBlocked(false); }}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        title={blocked ? "Tap to enable music" : playing ? "Pause music" : "Play music"}
      >
        {playing ? "♫" : "♪"}
      </button>
    </div>
  );
}
