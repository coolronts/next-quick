import {cloneElement} from 'react';
import styles from './LogoGroup.module.css';

type props = {
    children: React.ReactNode[];
}
const LogoGroup: React.FC<props> = ({ children }) => {
    return (
        <div className={styles.container} >
            {children && children.map((child, index) => {
                return (
                    <>
                      <div key={index} className={styles.logo}>{child}</div>
                    </>
                )
            })}
        </div>
    );
}

    export default LogoGroup;