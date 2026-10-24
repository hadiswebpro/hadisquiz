import {useEffect,useRef,useState} from "react";
import styles from "./MusicPlayer.module.css";
import type {ThemeName} from "../../themes/themeConfig";
const tracks:Record<ThemeName,string>={intro:"intro",bloom:"bloom",echo:"echo",veil:"veil",abyss:"abyss",void:"void"};
export default function MusicPlayer({theme="intro"}:{theme?:ThemeName}){
 const ref=useRef<HTMLAudioElement>(null);
 const [playing,setPlaying]=useState(false);
 useEffect(()=>{setPlaying(false);if(ref.current){ref.current.pause();ref.current.load();}},[theme]);
 async function toggle(){if(!ref.current)return;if(playing){ref.current.pause();setPlaying(false);return;}try{await ref.current.play();setPlaying(true);}catch{setPlaying(false);}}
 return <div className={styles.player}><audio ref={ref} loop src={`${import.meta.env.BASE_URL}audio/${tracks[theme]}.mp3`} onEnded={()=>setPlaying(false)}/><button onClick={toggle} aria-label={playing?"Mute music":"Play music"}>{playing?"🔊":"🔇"}</button></div>;
}
