import type {ReactNode} from "react";
import type {ThemeName} from "./themeConfig";
import "./themes.css";
import "./intro.css";
import "./bloom.css";
import "./echo.css";
import "./veil.css";
import "./abyss.css";
import "./void.css";
export default function ThemeProvider({theme,children}:{theme:ThemeName;children:ReactNode}){
 return <div className="game-theme" data-theme={theme}>{children}</div>;
}