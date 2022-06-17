import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {}

export const BasicButton: React.FC<ButtonProps> = () => {
    return (
    <button className={styles.BasicButton}>He</button>
      );
}
