import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };
export default function Button({ children, className = "", ...props }: Props) {
  return <button className={`${styles.button} ${className}`} {...props}>{children}</button>;
}
