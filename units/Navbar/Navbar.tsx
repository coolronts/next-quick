import {useEffect, useState} from 'react';

import {ParentMenuItem} from '../../components/Menu/Menu';
import {currentTheme} from '../../atoms/index';
import styles from './Navbar.module.css';
import {useRecoilValue} from 'recoil';

const menu = [
    {
        parent: 'New/Used Bicycle',
        children: []
    },
    {
        parent: 'New Bicycle',
        children: [
            {
                name: 'Bicycle',
                children: []
            },
        ]
    },
    {
        parent: 'Used Bicycle',
        children: []
    },
    {
        parent: 'Driving Equipment MC/MX',
        children: []
    },
    {
        parent: 'Parts MX/Enduro',
        children: []
    },
    {
        parent: 'Parts MC',
        children: []
    },
    {
        parent: 'Husqvarna E-Motor',
        children: []
    }
];

const Navbar: React.FC = () => {
    const [childrenItem, setChildrenItem]: any = useState([]);
    const [parentIndex, setParentIndex]: any = useState();

    const menuOpen = (children: Array<any>, index: number): any => {
        if (parentIndex === index) {
            setParentIndex(undefined);
            setChildrenItem([]);
        } else {
            if (children.length > 0) {
                setChildrenItem(children);
                setParentIndex(index);
            }
        }
    };

    useEffect(() => {
    }, [childrenItem, currentTheme]);

    const currentThemes = useRecoilValue(currentTheme);

    return (
        <div className={styles.container}>
            <div className={styles.navbarContainer} style={{backgroundColor: currentThemes.backgroundColor}} >
                {menu.map((item, index) => {
                    return (
                        <div className={styles.navbarItem} key={index} onClick={() => menuOpen(item.children, index)}>
                            <ParentMenuItem key={index} name={item.parent} isChildren={item.children.length === 0 ? false : true} />
                        </div>
                    );
                })}
            </div>
            {childrenItem.length > 0 &&
                <div className={styles.navbarExtended}>
                    {childrenItem.map((item:any, index:number) => {
                        return (
                            <div className={styles.navbarExtendedItem} key={index}>
                                <ParentMenuItem key={index} name={item.name} isChildren={item.children.length === 0 ? false : true} />
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Navbar;