import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export type ButtonProps = {
  variant?: "big" | "reverse";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export default function Button({ 
  variant = "big", 
  children, 
  onClick, 
  className,
  href
}: ButtonProps) {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      className={clsx(
        styles.button,
        variant === "big" ? styles.big : styles.reverse,
        className
      )}
      onClick={onClick}
      href={href}
    >
      <p className={styles.text}>
        {children}
      </p>
    </Component>
  );
}
