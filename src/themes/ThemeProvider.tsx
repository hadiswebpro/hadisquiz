import {useEffect,useState} from "react";
import type {CSSProperties,ReactNode} from "react";
import type {ThemeName} from "./themeConfig";
import "./themes.css";
import "./intro.css";
import "./bloom.css";
import "./echo.css";
import "./veil.css";
import "./abyss.css";
import "./void.css";

const backgrounds:Record<ThemeName,string>={
 intro:"intro.jpg",bloom:"bloom.jpg",echo:"echo.jpg",
 veil:"veil.jpg",abyss:"abbys.jpg",void:"void.jpg"
};

export default function ThemeProvider({theme,children}:{theme:ThemeName;children:ReactNode}){
 const [visibleTheme,setVisibleTheme]=useState<ThemeName|null>(null);
 const sceneUrl=`${import.meta.env.BASE_URL}backgrounds/${backgrounds[theme]}`;
 useEffect(()=>{
   let active=true;
   const img=new Image();
   img.onload=()=>{if(active)setVisibleTheme(theme)};
   img.onerror=()=>{if(active)setVisibleTheme(theme)};
   img.src=sceneUrl;
   if(img.complete && img.naturalWidth>0)setVisibleTheme(theme);
   return ()=>{active=false};
 },[sceneUrl,theme]);
 const style={"--scene":`url("${sceneUrl}")`} as CSSProperties;
 return <div key={theme} className="game-theme" data-theme={theme} data-scene-ready={visibleTheme===theme?"true":"false"} style={style}>{children}</div>;
}
