import {Image} from '../Image/Image'
import {currentTheme} from '../../atoms/index'
import styles from './Logo.module.css'
import {useRecoilValue} from 'recoil'

export const Logo: React.FC = () => { 
    const currentThemes = useRecoilValue(currentTheme);
    return (
        <div className={styles.logo} >
            <Image src="https://webshop.snellingen.no/Thumbnails/originals/p55/logo_55210.png?ext=.png" alt="logo" width="130px" height="80px"/>
        </div>
    );
}