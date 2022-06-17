import {DarkLightMode, LoginIcon} from '../../components/Icons/Icons';

import {Logo} from '../../components/Logo/Logo';
import LogoGroup from '../LogoGroup/LogoGroup';
import Searchbar from '../../components/SearchInput/SearchInput';
import {colorMode} from '../../atoms/index';
import styles from './Header.module.css';
import { useRecoilState } from 'recoil';

type HeaderProps = {
}

export const Header: React.FC<HeaderProps> = () => {
    const [colorModeState, setColorModeState] = useRecoilState(colorMode);
    const handleColorMode = () => setColorModeState(!colorModeState);

    return (
        <div className="Header" style={{ padding: '0 420px' }}>
            <div className={styles.firstLine}>
                <Logo />
                <Searchbar />
                <LogoGroup>
                    <LoginIcon title="Login"/>
                    <DarkLightMode title="Change Theme" onClick={() => handleColorMode()} />
                </LogoGroup>
            </div>
        </div>
    );
}