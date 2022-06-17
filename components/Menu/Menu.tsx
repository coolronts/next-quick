import { DownArrow } from '../Icons/Icons';
import {currentTheme} from '../../atoms/index'
import styles from './Menu.module.css';
import {useRecoilValue} from 'recoil'

type PropParentMenuItem = {
    name: string;
    isChildren: boolean;
}
export const ParentMenuItem: React.FC<PropParentMenuItem> = ({ name, isChildren }) => {

    const currentThemes = useRecoilValue(currentTheme);
    return (
        <div className={styles.parentMenuItem}>
            <p  >{name}</p>
            {isChildren && <DownArrow />}
        </div>
    );
}

