import React, { ReactNode } from 'react';

import styles from './SplitScreen.module.css';

type props = {
    children: ReactNode[]
}
type leftProps = {
    children: ReactNode
}
const SplitScreen = ({children}: props) => {
    return (
        <div className={styles.splitScreen}>
            {children}
        </div>
    );
}



const Left = ({children}: leftProps) => {
    return (
        <div className={styles.splitScreen_Left}>
            {children}
        </div>
    );
}

const Right = ({children}: leftProps) => {
    return (
        <div className={styles.splitScreen_Right}>
            {children}
        </div>
    );
}

export default SplitScreen;
export { Left, Right };