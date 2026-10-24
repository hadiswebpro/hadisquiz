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
 intro:"intro.jpg",
 bloom:"bloom.jpg",
 echo:"echo.jpg",
 veil:"veil.jpg",
 abyss:"abbys.jpg",
 void:"void.jpg"
};

export default function ThemeProvider({theme,children}:{theme:ThemeName;children:ReactNode}){
 const sceneUrl=`${import.meta.env.BASE_URL}backgrounds/${backgrounds[theme]}`;
 const style={"--scene":`url("${sceneUrl}")`} as CSSProperties;
 return <div className="game-theme" data-theme={theme} style={style}>{children}</div>;
}
